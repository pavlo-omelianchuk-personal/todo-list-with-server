import cors from "cors";
import express, { Request, Response } from "express";
import { TodoItem } from "./types"; // assume we have defined the TodoItem interface in a separate file

const todos: TodoItem[] = [
  { id: 1, title: "Review system architecture diagram", isSelected: false },
  { id: 2, title: "Research new technology solutions", isSelected: false },
  { id: 3, title: "Define coding standards", isSelected: true },
]; // initialize the todo list with initial state
export const app = express();

app.use(cors({
  origin: "*",
  // origin: "http://127.0.0.1:5173",
}));

app.use(express.json());

app.get("/todos", (req: Request, res: Response) => {
  res.status(200).json(todos); // return the entire list of todo items in the response with a 200 status code
});

app.get("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.post("/todos", (req: Request, res: Response) => {
  const newTodo: TodoItem = {
    id: Math.random(), // generate a random id for the new todo item
    title: req.body.title, // read the title of the new todo item from the request body
    isSelected: false, // set the isSelected status to false by default
  };

  todos.push(newTodo); // add the new todo item to the list

  res.status(201).json(newTodo); // return the new todo item in the response with a 201 status code
});

app.put("/todos/:id", (req: Request, res: Response) => {
  const idToUpdate = parseFloat(req.params.id); // read the id of the todo item to update from the request URL
  const updatedTodo = req.body as TodoItem; // read the updated todo item data from the request body

  const todoIndex = todos.findIndex((todo) => todo.id === idToUpdate); // find the index of the todo item in the list

  if (todoIndex === -1) {
    // if the todo item doesn't exist in the list, return a 404 status code and an error message
    return res.status(404).json({ error: "Todo item not found" });
  }

  todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo }; // update the todo item with the new data using object spread syntax

  res.status(200).json(todos[todoIndex]); // return the updated todo item in the response with a 200 status code
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const idToDelete = parseFloat(req.params.id); // read the id of the todo item to delete from the request URL
  const todoIndex = todos.findIndex((todo) => todo.id === idToDelete); // find the index of the todo item in the list

  if (todoIndex === -1) {
    // if the todo item doesn't exist in the list, return a 404 status code and an error message
    return res.status(404).json({ error: "Todo item not found" });
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0]; // remove the todo item from the list using the splice() method

  res.status(200).json(deletedTodo); // return the deleted todo item in the response with a 200 status code
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});

import { useContext } from "react";
import { TodosContext } from "./todosContext";

export const useTodos = () => useContext(TodosContext);

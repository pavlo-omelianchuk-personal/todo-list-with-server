import { createContext } from "react";
import { TodoIdType, TodoItemType } from "../utils/types";

type TodosContextTypes = {
  todos: TodoItemType[] | null;
  handleDelete: ({ id }: TodoIdType) => Promise<void>;
  handleSelect: ({ id }: TodoIdType, todo: TodoItemType) => Promise<void>;
  handleAddItem: (todo: TodoItemType) => Promise<void>;
};

export const TodosContext = createContext<TodosContextTypes>({} as TodosContextTypes);

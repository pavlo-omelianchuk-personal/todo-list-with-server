import React, { useEffect, useMemo, useState } from "react";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "../services/requests";
import { TodoIdType, TodoItemType } from "../utils/types";
import { TodosContext } from "./todosContext";

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItemType[] | null>(null);
  const updateTodos = () => {
    fetchTodos().then((items) => {
      setTodos(items);
    });
  }

  const handleDelete = async ({ id }: TodoIdType) => {
    await deleteTodo(id)
    updateTodos()
  }
  const handleAddItem = async (todo: TodoItemType) => {
    await createTodo(todo)
    updateTodos()
  }
  const handleSelect = async ({ id }: TodoIdType, todo: TodoItemType) => {
    await updateTodo(id, todo)
    updateTodos()
  }

  useEffect(() => {
    let mounted = true;
    fetchTodos().then((items) => {
      if (mounted) {
        setTodos(items);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  console.log(todos);

  const value = useMemo(
    () => ({
      todos, handleDelete, handleAddItem, handleSelect
    }),
    [todos]
  );

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
}

import { TodoItemType } from "src/utils/types";
import React from "react";
import { RemoveButton } from "./buttonContainer";
import { Title } from "./titleContainer";

interface TodoListProps {
  todos: TodoItemType[] | null;
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {!!todos && todos.map((todo: TodoItemType) => {
        return (
          <li
            key={todo.id}
            className={`flex flex-row items-center w-80 max-w-sm border-solid border-t-2 border-b-2 ${todo.isSelected ? 'border-blue-200' : 'border-sky-500'}  my-5 p-2 pr-0 justify-between hover:bg-gray-800 cursor-pointer`}
          >
            <Title todo={todo} />
            <RemoveButton id={todo.id} />
          </li>
        );
      })}
    </ul >
  );
};

import { Tooltip } from "@material-tailwind/react";
import { TitleProps } from "@utils/types";
import React from 'react';
import { useTodos } from "../context/index";

export const Title: React.FC<TitleProps> = ({ todo }) => {
  const { handleSelect } = useTodos()
  const handleOnSelect = () => {
    const id = todo.id
    handleSelect({ id }, { ...todo, isSelected: !todo.isSelected })
  };
  return (
    <Tooltip content="Click me to select">
      <div onClick={handleOnSelect} className="w-full text-left max-w-[70%] truncate">
        {todo.title}
      </div>
    </Tooltip>
  );
};

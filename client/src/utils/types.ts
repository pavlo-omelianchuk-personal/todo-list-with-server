export type TodoItemType = {
  id: number | null;
  title: string | null;
  isSelected: boolean | null;
};

export type TodoIdType = {
  id: number | null;
};

export type TitleProps = {
  todo: TodoItemType;
};

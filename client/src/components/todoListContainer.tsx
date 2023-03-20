import React, { lazy, Suspense } from 'react';
import { useTodos } from "../context";
import { InputComponent } from './inputComponent';

const TodoList = lazy(() => import('./todoList').then(({ TodoList }) => ({
  default: TodoList
})))

export const TodoListContainer: React.FC<any> = () => {
  const { todos } = useTodos()
  console.log(todos)
  return <>

    <h1 className='mb-5 text-3xl'>Todo List</h1>
    <InputComponent />
    <Suspense fallback={<h2 className='text-2xl text-white'>Loading...</h2>}>
      <TodoList todos={todos} />
    </Suspense>
  </>;
}

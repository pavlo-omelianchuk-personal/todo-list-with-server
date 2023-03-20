import axios, { AxiosError, AxiosResponse } from "axios";
import { TodoItemType } from "../utils/types";

const BASE_URL = "http://localhost:3001";

function handleAxiosError(error: AxiosError): void {
  if (error.response) {
    console.error("Axios error:", error.response.status, error.response.data);
  } else if (error.request) {
    console.error("Axios error:", error.request);
  } else {
    console.error("Axios error:", error.message);
  }
}

export async function fetchTodos(): Promise<TodoItemType[]> {
  try {
    const response: AxiosResponse<TodoItemType[]> = await axios.get(`${BASE_URL}/todos`);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
    throw new Error("Failed to fetch todos");
  }
}

export async function createTodo(todo: TodoItemType): Promise<TodoItemType> {
  try {
    const response: AxiosResponse<TodoItemType> = await axios.post(`${BASE_URL}/todos`, todo);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
    throw new Error("Failed to create todo");
  }
}

export async function updateTodo(id: number | null, todo: TodoItemType): Promise<TodoItemType> {
  try {
    const response: AxiosResponse<TodoItemType> = await axios.put(`${BASE_URL}/todos/${id}`, todo);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
    throw new Error(`Failed to update todo with ID ${id}`);
  }
}

export async function deleteTodo(id: number | null): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/todos/${id}`);
    console.log(`todo with id ${id} has been deleted`);
  } catch (error: any) {
    handleAxiosError(error);
    throw new Error(`Failed to delete todo with ID ${id}`);
  }
}

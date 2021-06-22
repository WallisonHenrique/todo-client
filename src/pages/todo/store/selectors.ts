import { StoreTypes } from 'store/types';

export const loading = (state: StoreTypes) => state.todo.loading;
export const todoData = (state: StoreTypes) => state.todo.todos;
export const error = (state: StoreTypes) => state.todo.error;

import api from 'services/api';
import routes from './routes';
import { TodoType } from './types';

export const createTodo = async (todo: { name: string }) => {
  const { data } = await api.post(routes.todo, todo);
  return data;
};

export const deleteTodo = async (id: number) =>
  api.delete(`${routes.todo}/${id}`);

export const loadTodos = async () => {
  const { data } = await api.get(routes.todo);
  return data;
};

export const updateTodo = async (todo: TodoType) =>
  api.put(`${routes.todo}/${todo.id}`, todo);

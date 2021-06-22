import { action } from 'typesafe-actions';
import { TodoType } from '../types';
import * as actionTypes from './types';

export const createTodo = (todo: { name: string }) =>
  action(actionTypes.CREATE_TODO, todo);

export const deleteTodo = (id: number) => action(actionTypes.DELETE_TODO, id);

export const loadTodo = () => action(actionTypes.LOAD_TODOS);

export const updateTodo = (todo: TodoType) =>
  action(actionTypes.UPDATE_TODO, todo);

export const setError = (error: string) => action(actionTypes.SET_ERROR, error);

export const setLoading = (loading: boolean) =>
  action(actionTypes.SET_LOAD, loading);

export const setTodos = (todos: TodoType[]) =>
  action(actionTypes.SET_TODOS, todos);

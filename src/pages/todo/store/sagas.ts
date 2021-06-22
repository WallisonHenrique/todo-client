import { call, put, takeEvery } from '@redux-saga/core/effects';
import { errorMessages } from 'constants/errorMessages';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as services from '../services';
import * as actionsTypes from './types';
import { TodoType } from '../types';

export function* loadTodos() {
  try {
    yield put(actions.setLoading(true));
    const todos: TodoType[] = yield call(services.loadTodos);
    yield put(actions.setTodos(todos));
    yield put(actions.setError(''));
  } catch (error) {
    const { status }: { status: keyof typeof errorMessages } = error.response;
    yield put(actions.setError(errorMessages[status]));
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* createTodo({
  payload,
}: ActionType<typeof actions.createTodo>) {
  try {
    yield put(actions.setLoading(true));
    yield call(services.createTodo, payload);
    yield call(loadTodos);
  } catch (error) {
    const { status }: { status: keyof typeof errorMessages } = error.request;
    yield put(actions.setError(errorMessages[status]));
  }
}

export function* deleteTodo({
  payload,
}: ActionType<typeof actions.deleteTodo>) {
  try {
    yield put(actions.setLoading(true));
    yield call(services.deleteTodo, payload);
    yield call(loadTodos);
  } catch (error) {
    const { status }: { status: keyof typeof errorMessages } = error.response;
    yield put(actions.setError(errorMessages[status]));
  }
}

export function* updateTodo({
  payload,
}: ActionType<typeof actions.updateTodo>) {
  try {
    yield put(actions.setLoading(true));
    yield call(services.updateTodo, payload);
    yield call(loadTodos);
  } catch (error) {
    const { status }: { status: keyof typeof errorMessages } = error.response;
    yield put(actions.setError(errorMessages[status]));
  }
}

export default [
  takeEvery(actionsTypes.CREATE_TODO, createTodo),
  takeEvery(actionsTypes.DELETE_TODO, deleteTodo),
  takeEvery(actionsTypes.LOAD_TODOS, loadTodos),
  takeEvery(actionsTypes.UPDATE_TODO, updateTodo),
];

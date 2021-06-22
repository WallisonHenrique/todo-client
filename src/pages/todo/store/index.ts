import { ActionType } from 'typesafe-actions';
import * as actionTypes from './types';
import * as actions from './actions';
import { TodoStateType } from '../types';

const INITIAL_STATE: TodoStateType = {
  error: '',
  loading: false,
  todos: [],
};

const reducer = (state = INITIAL_STATE, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.SET_LOAD:
      return { ...state, loading: action.payload };
    case actionTypes.SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default reducer;

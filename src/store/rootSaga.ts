import { all } from 'redux-saga/effects';

import todo from 'pages/todo/store/sagas';

export default function* rootSaga() {
  yield all([...todo]);
}

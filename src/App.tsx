import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import TodoPage from './pages/todo/todo-page';

const App: React.FC = () => (
  <Provider store={store}>
    <TodoPage />
  </Provider>
);

export default App;

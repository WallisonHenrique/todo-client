import React, { useEffect, useState } from 'react';
import { makeStyles, TextField, Typography } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import * as selector from './store/selectors';
import { TodoType } from './types';
import * as actions from './store/actions';
import TodoList from './todo-list/todo-list';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    margin: '0 auto',
  },
  inputTask: {
    width: '100%',
  },
  completed: {
    opacity: 0.4,
  },
}));

const TodoPage = () => {
  const classes = useStyles();
  const todoData: TodoType[] = useSelector(selector.todoData);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    dispatch(actions.loadTodo());
  }, [dispatch]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const task = { name: taskName };
    dispatch(actions.createTodo(task));
    setTaskName('');
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          className={classes.inputTask}
          label="Adicionar tarefa"
          onChange={event => setTaskName(event.target.value)}
          value={taskName}
        />
      </form>
      <TodoList todoData={todoData.filter(item => item.completed === false)} />
      <Typography variant="overline">Completado</Typography>
      <div className={classes.completed}>
        <TodoList todoData={todoData.filter(item => item.completed === true)} />
      </div>
    </div>
  );
};

export default TodoPage;

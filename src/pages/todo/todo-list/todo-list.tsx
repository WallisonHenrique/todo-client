import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { TodoType } from '../types';

const useStyles = makeStyles(() => ({
  editable: {
    background: 'none',
    border: 'none',
    height: 40,
    outline: 'none',
  },
}));

const TodoList = ({ todoData }: { todoData: TodoType[] }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleToggle = ({ completed, ...rest }: TodoType) => {
    dispatch(actions.updateTodo({ ...rest, completed: !completed }));
  };

  const handleDelete = (id: number) => dispatch(actions.deleteTodo(id));

  const handleBlur = (event: any, todo: TodoType) => {
    dispatch(actions.updateTodo({ ...todo, name: event.target.value }));
  };

  const handleKeyCode = (event: any) => {
    if (event.keyCode === 13) {
      event.target.blur();
    }
  };

  return (
    <List>
      {todoData.map(todo => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <div>
            <ListItem key={String(todo.id)} role={undefined} dense button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={() => handleToggle(todo)}
                />
              </ListItemIcon>
              <input
                className={classes.editable}
                type="text"
                defaultValue={todo.name}
                onBlur={event => handleBlur(event, todo)}
                onKeyUp={handleKeyCode}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

export default TodoList;

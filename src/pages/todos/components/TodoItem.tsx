import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListAtom, useTodoActions } from '@/pages/todos/store';
import { Todo, TodoApi } from '@api';
import { authAtom } from '@store';
import React from 'react';
import { replaceItemAtIndex } from '@/lib/array';
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Comment, Details, Info } from '@mui/icons-material';
import { RouterLink } from '@components';
import { useLocation } from 'react-router-dom';

type TodoProps = {
  todo: Todo;
};
export const TodoItem = ({ todo }: TodoProps) => {
  const { update } = useTodoActions();
  const location = useLocation();
  const handleComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    return update({
      ...todo,
      complete: event.target.checked,
    });
  };

  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          component={RouterLink}
          to={`/todos/${todo.id}`}
          state={{ backgroundLocation: location }}
        >
          <Info />
        </IconButton>
      }
      disablePadding
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          onChange={handleComplete}
          id={todo.id.toString()}
          checked={todo.complete}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText primary={todo.title} />
    </ListItem>
  );
};

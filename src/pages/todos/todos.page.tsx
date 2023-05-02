import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { AsyncWrapper, DashboardLayout, RequireAuth, RouterLink } from '@components';
import { postsListSelector } from '@store';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Clear, Done } from '@mui/icons-material';
import { todoListAtom } from '@/pages/todos/store/todo';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todoList.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

// Error page for use with react-router
export const Todos = () => {
  const { t } = useTranslation();
  return (
    <RequireAuth>
      <DashboardLayout>
        <Container component="main" maxWidth="sm">
          <AsyncWrapper>
            <TodoList />
          </AsyncWrapper>
        </Container>
      </DashboardLayout>
    </RequireAuth>
  );
};

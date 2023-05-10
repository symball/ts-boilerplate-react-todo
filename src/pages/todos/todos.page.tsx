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
import React, { useEffect, useState } from 'react';
import { AsyncWrapper, DashboardLayout, RequireAuth, RouterLink } from '@components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Clear, Comment, Done } from '@mui/icons-material';
import { filteredTodoListSelector, todoListAtom } from '@/pages/todos/store/todo';
import { TodoApi, Todo, Configuration } from '@api';
import { authAtom } from '@store';
import { TodoFilter } from '@/pages/todos/components/TodoFilter';
import { replaceItemAtIndex } from '@/lib/array';
import { TodoItem } from '@/pages/todos/components/TodoItem';
import { TodoCreator } from '@/pages/todos/components/TodoAdd';

const TodoList = () => {
  const [effectCalled, setEffectCalled] = useState(0);
  const todoApi = new TodoApi(new Configuration({ credentials: 'include' }));
  // const authKey = useRecoilValue(authAtom);

  const setTodoList = useSetRecoilState(todoListAtom);
  const todoList = useRecoilValue(filteredTodoListSelector);

  useEffect(() => {
    setEffectCalled(effectCalled + 1);
    todoApi.todosGet().then(({ data }) => {
      setTodoList(data);
    });
  }, []);

  return (
    <React.Fragment>
      <TodoCreator />
      <TodoFilter />
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </List>
    </React.Fragment>
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

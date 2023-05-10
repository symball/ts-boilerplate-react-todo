import { useNavigate, useParams } from 'react-router-dom';
import { todoDetailsAtom, useTodoActions } from '@/pages/todos/store';
import React, { useEffect } from 'react';
import { AsyncWrapper, DashboardLayout, RequireAuth } from '@components';
import { TodoDetailsRouteParams } from '@/pages/todos/lib';
import { useRecoilValue } from 'recoil';
import { Box, Card, CardContent, Container, Modal, Typography } from '@mui/material';

const TodoCard = () => {
  const todo = useRecoilValue(todoDetailsAtom);
  const navigate = useNavigate();
  const handleClose = () => navigate(-1);
  return (
    <Card>
      <CardContent>{todo.title}</CardContent>
    </Card>
  );
};

export const TodosDetail = () => {
  const { todoId } = useParams<TodoDetailsRouteParams>();
  const { get } = useTodoActions();
  useEffect(() => {
    get(Number(todoId));
  });

  return (
    <RequireAuth>
      <DashboardLayout>
        <Container component="main" maxWidth="sm">
          <AsyncWrapper>
            <TodoCard />
          </AsyncWrapper>
        </Container>
      </DashboardLayout>
    </RequireAuth>
  );
};

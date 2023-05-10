import { AsyncWrapper, RequireAuth } from '@components';
import React, { useEffect, useState } from 'react';
import { filteredTodoListSelector, todoDetailsAtom, useTodoActions } from '@/pages/todos/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, Card, CardContent, Modal, TextField, Typography } from '@mui/material';
import { TodoDetailsRouteParams } from '@/pages/todos/lib';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TodoCard = () => {
  const todo = useRecoilValue(todoDetailsAtom);
  const navigate = useNavigate();
  const handleClose = () => navigate(-1);
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {todo.title}
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={todo.content}
        />
      </Box>
    </Modal>
  );
};
export const TodosModal = () => {
  const { todoId } = useParams<TodoDetailsRouteParams>();
  const { get } = useTodoActions();
  useEffect(() => {
    get(Number(todoId));
  });

  return (
    <RequireAuth>
      <AsyncWrapper>
        <TodoCard />
      </AsyncWrapper>
    </RequireAuth>
  );
};

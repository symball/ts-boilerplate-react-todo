import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListAtom, useTodoActions } from '@/pages/todos/store';
import { ResponseError, TodoApi } from '@api';
import { authAtom } from '@store';
import React, { useState } from 'react';
import { replaceItemAtIndex } from '@/lib/array';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Comment, Lock } from '@mui/icons-material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useForm } from 'react-hook-form';

type FormValues = {
  title: string;
};

export const TodoCreator = () => {
  const { add } = useTodoActions();

  const onSubmit = ({ title }: FormValues) => {
    return add(title);
  };

  return (
    <FormContainer defaultValues={{ title: '' }} onSuccess={onSubmit}>
      <TextFieldElement margin="normal" required fullWidth label="title" name={'title'} autoFocus />
      <Button type={'submit'} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add
      </Button>
    </FormContainer>
  );
};

import { Avatar, Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useNavigate } from 'react-router-dom';
import { Lock } from '@mui/icons-material';
import { useRecoilValue } from 'recoil';
import { ResponseError } from '@api';
import { loginRedirectAtom, useUserActions } from '@store';

// Login form elements
type FormValues = {
  username: string;
  password: string;
};

// Main page component for the login form
export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userActions = useUserActions();
  const loginRedirect = useRecoilValue(loginRedirectAtom);
  const { formState, setError } = useForm();
  const { errors } = formState;

  async function onSubmit({ username, password }: FormValues) {
    try {
      await userActions.login(username, password);
      navigate(loginRedirect);
    } catch (err) {
      if (err instanceof ResponseError) {
        setError('api', {
          type: 'Request',
          message: 'Incorrect username / password',
        });
      } else {
        throw new Error('Unhandled Error');
      }
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <FormContainer defaultValues={{ username: '', password: '' }} onSuccess={onSubmit}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Lock />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('sign_in')}
          </Typography>
          <TextFieldElement
            margin="normal"
            required
            fullWidth
            label={t('username')}
            name={'username'}
            autoComplete="username"
            autoFocus
          />
          <TextFieldElement
            margin="normal"
            required
            fullWidth
            label={t('password')}
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <Button type={'submit'} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {t('sign_in')}
          </Button>
          {errors.api && (
            <div className="alert alert-danger mt-3 mb-0">{errors.api?.message?.toString()}</div>
          )}
        </Box>
      </FormContainer>
    </Container>
  );
};

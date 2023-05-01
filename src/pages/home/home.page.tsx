import { Avatar, Box, Button, Container, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Business } from '@mui/icons-material';
import { RouterLink } from '@components';

// Error page for use with react-router
export const Home = () => {
  const { t } = useTranslation();
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <Business />
        </Avatar>
        <Typography variant="h1">{t('welcome')}</Typography>
        <Button variant="outlined" to="/login" component={RouterLink}>
          {t('sign_in')}
        </Button>
      </Box>
    </Container>
  );
};

import { AppBar, Button, Container, Paper, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSetRecoilState } from 'recoil';

import { RouterLink } from '@/components/RouterLink';
import { authAtom } from '@/store';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

// User logoff presentation and behaviour handling
function Signout() {
  const setAuth = useSetRecoilState(authAtom);

  const onSignout = () => {
    setAuth(null);
  };

  return (
    <Button onClick={onSignout} type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
      Signout
    </Button>
  );
}

// A default layout to be used for logged in users
export const DashboardLayout = ({ children }: { children: JSX.Element }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            {t('dashboard_title')}
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <LanguageSwitcher />
            <Signout />
          </Stack>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        {children}
      </Container>
    </React.Fragment>
  );
};

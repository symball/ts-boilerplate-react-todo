import { Box, Typography } from '@mui/material';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

// Error page for use with react-router
export const Error = () => {
  const error = useRouteError();
  // TODO Log to something like sentry
  if (isRouteErrorResponse(error)) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h1" style={{ color: 'white' }}>
          {error.statusText}
        </Typography>
      </Box>
    );
  } else {
    return <h1>Unhandled router error</h1>;
  }
};

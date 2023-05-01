import { createBrowserRouter } from 'react-router-dom';

// import Home from '@pages/home/home.page';
// import Error from '@pages/error/error.page';
import { Dashboard, Error, Home, Login } from '@pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default router;

import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { authAtom, loginRedirectAtom } from '@/store';

// Tells React the user should be authenticated credentials present to view content
export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useRecoilValue(authAtom);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

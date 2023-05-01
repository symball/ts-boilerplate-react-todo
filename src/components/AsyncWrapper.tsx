import React, { Suspense } from 'react';
import { useSetRecoilState } from 'recoil';

import { ErrorBoundary, Loading } from '@components';
import { authAtom } from '@store';

// Async wrapper is a small helper component to help with display of a loader and isolate presentation
// errors within the document tree to be used with dynamic data
export const AsyncWrapper = ({ children }: { children: JSX.Element }) => {
  const setAuth = useSetRecoilState(authAtom);

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary setAuth={setAuth}>{children}</ErrorBoundary>
    </Suspense>
  );
};

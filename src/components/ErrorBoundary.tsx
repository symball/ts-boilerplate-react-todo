import React, { ReactNode } from 'react';

import { ResponseError } from '@/gen/api';

// ErrorBoundary props
interface ErrorBoundaryProps {
  children: ReactNode;
  setAuth?: any;
}

// ErrorBoundary state
interface ErrorBoundaryState {
  error: any;
  hasError: boolean;
}

// A component for catching and handling exceptions locally without unloading React from the DOM
// In the event an API request fails due to authentication issues, this component will also catch
// and handle resetting user auth locally which, in turn will send the user back to the login page
// if they are on a restricted page
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
    hasError: false,
  };

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  // TODO Log to something like sentry
  // }

  static getDerivedStateFromError(err: any): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: err };
  }

  render() {
    if (this.state.hasError) {
      // If we are dealing with auth error from AsyncWrapper
      if (this.props.setAuth !== undefined) {
        if (this.state.error instanceof ResponseError) {
          if (this.state.error.response.status == 401) {
            this.props.setAuth(null);
          }
        }
      }

      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            Whooops
            <br />
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

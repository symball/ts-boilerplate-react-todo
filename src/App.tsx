import { Route, Routes, useLocation } from 'react-router-dom';
import { Error, Home, Login, Todos, TodosDetail, TodosModal } from '@pages';
import React from 'react';

export const App = () => {
  const location = useLocation();

  let state = location.state as { backgroundLocation?: Location };

  return (
    <React.Fragment>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:todoId" element={<TodosDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/todos/:todoId" element={<TodosModal />} />
        </Routes>
      )}
    </React.Fragment>
  );
};

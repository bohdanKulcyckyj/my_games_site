import React from 'react';
import './global.scss';
import { CssBaseline } from '@material-ui/core';
import { Route } from 'react-router-dom';
//COMPONENTS & PAGES
import Home from './pages/Home';

function App() {

  return (
    <>
      <CssBaseline />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </>
  );
}

export default App;

import React from 'react';
import './global.scss';
import { CssBaseline } from '@material-ui/core';
//COMPONENTS & PAGES
import Home from './pages/Home';

function App() {

  return (
    <>
      <CssBaseline />
      <Home />
    </>
  );
}

export default App;

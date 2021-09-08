import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Route } from 'react-router-dom';
//GLOBAL STYLES
import MyTheme from './GlobalStyles';
//COMPONENTS & PAGES
import Home from './pages/Home';

function App() {

  return (
    <>
      <ThemeProvider theme={MyTheme}>
        <CssBaseline />
        <Route path={["/game/:id", "/"]}>
          <Home />
        </Route>
      </ThemeProvider>
    </>
  );
}

export default App;

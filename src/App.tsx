import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={ LandingPage } />
      </Switch>
    </>
  );
}

export default App;

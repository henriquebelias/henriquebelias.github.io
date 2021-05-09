import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    </>
  );
}

export default App;

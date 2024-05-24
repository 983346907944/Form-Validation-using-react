// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Form from './Form';
import Success from './Success';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
};

export default App;

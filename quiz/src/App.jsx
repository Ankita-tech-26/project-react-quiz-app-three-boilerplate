// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Quiz} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;





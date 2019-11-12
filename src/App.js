import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeServices from './views/Services/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeServices}/>
      </Switch>
    </Router>
  );
}

export default App;

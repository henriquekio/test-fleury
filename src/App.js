import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeServices from './views/Services/Index';
import DetailServices from './views/Services/Show';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" component={DetailServices}/>
        <Route path="/" component={HomeServices}/>
      </Switch>
    </Router>
  );
}

export default App;

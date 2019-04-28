import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Dashboard from './Dashboard';
import About from './About';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={Dashboard} />
          <Route exact path ='/about' component={About} />
          <Route component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;

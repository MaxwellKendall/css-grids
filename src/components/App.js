import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Nav from './Nav';
import One from './One';
import Two from './Two';
import Three from './Three';
// import Four from './Four';
// import Five from './five';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="main">
          <Nav />
          <Route exact path="/css-grids/one" component={One} />
          <Route exact path="/css-grids/two" component={Two} />
          <Route exact path="/css-grids/three" component={Three} />
          {/* <Route exact path="/four" component={Four} />
          <Route exact path="/five" component={Five} /> */}
        </div>
      </Router>

    );
  }
}

export default App;

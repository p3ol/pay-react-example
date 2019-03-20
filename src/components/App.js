import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './Home';
import Article from './Article';

export default class App extends React.Component {

  history = createBrowserHistory()

  unlisten = this.history.listen(() =>
    window.scrollTo(0, 0)
  )

  render() {
    return (
      <Router history={this.history}>
        <Switch>
          <Route
            path="/article/:id"
            render={(props) =>
              <Article {...props} key={props.match.params.id} />
            }
          />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }

}

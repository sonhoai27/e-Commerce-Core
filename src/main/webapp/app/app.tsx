import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import LoginPage from "./login-page";
import MasterPage from "./master-page";
import LeftNav from './shared/components/admin/left-nav';

export class App extends React.Component {

  render() {

    return (
      <>
      <LeftNav/>
      <div className="main">
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={MasterPage} />
          </Switch>
        </Router>
      </div>
      </>
    );
  }
}

export default App;

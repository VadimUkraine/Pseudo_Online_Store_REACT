import React, { Component } from 'react';
import Login from './screen/Login';
import Catalog from './screen/Catalog';
import AddGood from './screen/AddGood';
import Layout from './screen/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class AppRoute extends Component {
  render() {
    return (
        <Router >
          <Layout>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/catalog" component={Catalog}/>
              <Route path="/add-good" component={AddGood}/>
            </Switch>
          </Layout>
        </Router>
    );
  }
}

export default AppRoute;
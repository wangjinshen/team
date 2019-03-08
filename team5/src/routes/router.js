import React from 'react';
import { Router, Route, Switch ,Redirect } from 'dva/router';
import BrowserHistory from './browser.js';
import Login from '../page/login/login';
import Home from '../page/home/index';

function RouterConfig() {
  return (
    <Router history={BrowserHistory}>
      <Switch>
        <Route path="/" exact component={()=>{
          return <Redirect to="/login"></Redirect>
        }} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

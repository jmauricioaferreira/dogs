import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route path="*/criar" component={LoginCreate} />
        <Route path="/perdeu" component={LoginPasswordLost} />
        <Route path="/resetar" component={LoginPasswordReset} />
      </Switch>
    </div>
  );
};

export default Login;

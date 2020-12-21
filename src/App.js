import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';

import './App.css';
import { UserStorage } from './UseContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;

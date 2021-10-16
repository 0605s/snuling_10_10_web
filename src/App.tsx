import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from 'pages/Home';
import Login from 'pages/Login';

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </div>
  );
};

export default App;

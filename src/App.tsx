import React from 'react';
import {Route} from 'react-router-dom';
import User from './components/User/User';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

import './App.scss';

function App() {
  return (
    <div className="App">
        <Route path="/" exact>
            <h1>Hello</h1>
        </Route>
        <Route path="/user" exact component={User} />
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
    </div>
  );
}

export default App;

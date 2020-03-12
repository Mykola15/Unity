import React from 'react';
import {Route} from 'react-router-dom';
import User from './components/User/User';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Route path="/" exact>
            <h1>Hello</h1>
        </Route>
        <Route path="/user" exact component={User} />
    </div>
  );
}

export default App;

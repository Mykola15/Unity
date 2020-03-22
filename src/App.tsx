import React from 'react';
import {Route} from 'react-router-dom';
import User from './components/User/User';
import Login from './components/Login_Registration/Login';
import Registration from './components/Login_Registration/Registration';
import MainPage from './components/MainPage/MainPage';

import Layout from './hoc/Layout/Layout';

import './App.scss';

function App() {
  return (
    <Layout>
        <Route path="/" exact>
            <h1>Hello</h1>
        </Route>
        <Route path="/user" exact component={User} />
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />    
        <Route path="/mainpage" exact component={MainPage} />
    </Layout>

  );
}

export default App;

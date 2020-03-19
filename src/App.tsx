import React from 'react';
import {Route} from 'react-router-dom';
import User from './components/User/User';
import Layout from './hoc/Layout/Layout';
import './App.scss';

function App() {
  return (
    <Layout>
        <Route path="/" exact>
            <h1>Hello</h1>
        </Route>
        <Route path="/user" exact component={User} />
    </Layout>
  );
}

export default App;

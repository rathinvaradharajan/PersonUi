import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import Add from './components/NewUser/AddContainer';
import users from './components/Display/UsersContainer';

export default (
  <Route path="/" component ={App}>
    <IndexRoute component={Add}/>
    <Route path="users" component={users} />
  </Route>
);

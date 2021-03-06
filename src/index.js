//console.log("Started");
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore'
import {loadUsers} from './actions/user';
import {Provider} from 'react-redux';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadUsers());

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

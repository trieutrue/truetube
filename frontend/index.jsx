import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout} from './actions/session_actions';
import * as SessionAPIUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root)

  //Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = SessionAPIUtil.login;
  window.signup = SessionAPIUtil.signup;
})
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import configureStore from './store/store';
import Root from './components/root';

ReactGA.initialize("G-ZX4XFTR87H")
ReactGA.pageview(window.location.pathname + window.location.search)

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
})
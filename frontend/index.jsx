import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA, { initialize } from 'react-ga';
import configureStore from './store/store';
import Root from './components/root';


function initializeReactGA() {
    ReactGA.initialize('G-ZX4XFTR87H');
    ReactGA.pageview('/homepage');
}

initializeReactGA()

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
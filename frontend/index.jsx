import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import configureStore from './store/store';
import Root from './components/root';


function initializeReactGA() {
    ReactGA.initialize('UA-188434192-2');
    ReactGA.pageview(location.pathname + location.hash);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeReactGA()
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
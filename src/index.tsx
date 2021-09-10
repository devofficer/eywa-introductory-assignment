import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import reportWebVitals from './reportWebVitals';
import TokenStore from './stores/TokenStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  tokens: TokenStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

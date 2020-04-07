import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./styles/index.css";

import { store } from './store/index';
import App from './App';

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

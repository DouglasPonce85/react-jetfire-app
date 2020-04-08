import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./styles/index.css";

import { store } from './store/index';
import App from './App';

render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById('app')
);

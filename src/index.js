import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Webpack will bundle this for us and inject a reference
// to that bundlec CSS into our index.html file
import "bootstrap/dist/css/bootstrap.min.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import App from './components/App';
import "./index.css";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);

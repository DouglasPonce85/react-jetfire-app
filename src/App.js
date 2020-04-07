import * as React from 'react';

import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './containers/Header';
import SideBar from './containers/SideBar';
import PageNotFound from './containers/PageNotFound';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/Home';

const App = () => {
    return (
        <Router>
            <Header />
            <SideBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default App;
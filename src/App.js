import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/common/Header';
import SideBar from './components/common/SideBar';
import PageNotFound from './components/common/PageNotFound';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/Home';
import Products from './containers/products/Products';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <Header />
                        <SideBar
                            location={location}
                            history={history}
                        />
                        <Switch>
                            <Route exact path="/" component={() => <HomePage /> } />
                            <Route path="/about" component={() => <AboutPage /> } />
                            <Route path="/products" component={() => <Products /> } />
                            <Route component={PageNotFound} />
                        </Switch>
                    </React.Fragment>
                )}
                />
            </Router>
        )
    }
}

export default App;

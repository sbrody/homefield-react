import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import '../App.scss';
import PageHeader from './pageBody/PageHeader';
import PageMain from './pageBody/PageMain';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/:id" children={<Child />} />
                    <Route exact path="/" children={<Child />} />
                </Switch>
                <Footer />
            </Router>

        </div>
    )
}

const Child = () => {
    let { id } = useParams();
    let location = useLocation();
    let pageId = location.objectId;

    return (
        <div>
            <PageMain id={id} pageId={pageId} />
        </div>
    )
}

export default App;
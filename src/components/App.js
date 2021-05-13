import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import '../App.scss';
import PageMain from './pageBody/PageMain';
import Footer from './Footer';
import UpperNavigation from './UpperNavigation';
import BlogPage from './pageBody/BlogPage';
import { createBrowserHistory } from 'history';
import ScrollToTop from 'react-router-scroll-top';

const appHistory = createBrowserHistory();

const App = () => {
    return (
        <Router history={appHistory}>
            <ScrollToTop>
                <UpperNavigation />
                <Navigation />
                <Switch>
                    <Route path="/:id" children={<Child />} />
                    <Route exact path="/" children={<Child />} />
                </Switch>
                <Footer />
            </ScrollToTop>
        </Router>
    )
}

const Child = () => {
    let { id } = useParams();
    let location = useLocation();
    let pageId = location.objectId;
    let url = location.pathname;
    console.log(location);
    console.log(url);
    // apply different routing if page type is post
    const childContent = url.includes('/news/') ? <BlogPage pageId={pageId} url={url} /> : <PageMain id={id} pageId={pageId} url={url} />

    return (
        <div>
            {childContent}
        </div>
    )
}

export default App;
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import constants from 'lib/constants';
import useFirstRender from 'hooks/useFirstRender';
import { isInsideFrame, isMobile } from 'lib/helpers';
import PageNotFound from 'components/PageNotFound';
import PageSpinner from 'components/PageSpinner';
import MyStoryPage from 'components/MyStoryPage';
const WhatIDoPage = React.lazy(() => import('components/WhatIDoPage'));
const TestimonialsPage = React.lazy(() => import('components/TestimonialsPage'));

const App = () => { 
    useFirstRender(() => {
        document.body.style.opacity = 1;
        // Breakout of frame if in mobile and in frameset (.tk) //   
        if (isInsideFrame() && isMobile()) {
            window.top.location.href = constants.uri.myGithubPageUri;
            return;
        } 
    });
    return (
        <Suspense fallback={<PageSpinner />}>
            <Container id="raffy-wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route path={ constants.routes.myStory } component={ MyStoryPage } exact />
                        <Route path={ constants.routes.whatIDo } component={ WhatIDoPage } exact />                
                        <Route path={ constants.routes.testimonials } component={ TestimonialsPage } exact />                                
                        <Route component={ PageNotFound } />
                    </Switch>
                </BrowserRouter>
            </Container>
        </Suspense>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));



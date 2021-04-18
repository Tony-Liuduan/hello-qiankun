
import React, { FC } from 'react';
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Layout from './components/Layout';
import { Counter } from './Counter';
import { SubApp } from './SubApp';

const App: FC = () => {
    return <>
        <Layout>
            <Switch>
                <Route path='/app-react' component={null} />
                <Route path='/app-angular' component={null} />
                <Route path='/counter' component={Counter} />
                <Redirect to={{ pathname: '/app-react' }} />
            </Switch>
            <div id="root"></div>
        </Layout>
        <br />
        <br />
        <div>----------------footer----------------</div>
        <SubApp></SubApp>
    </>
};

export default App;


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
    return <Layout>
        <a href="/#/app-react/demo/use/memo">app-react</a>
        <br />
        <Counter></Counter>
        <Switch>
            <Route path='/#/app-react/demo/use/memo' component={null} />
            <Route path='/app-angular/bose' component={null} />
            {/* <Redirect to={{ pathname: '/app-react' }} /> */}
        </Switch>
        <div id="root"></div>
        <br />
        <br />
        <SubApp></SubApp>
    </Layout>
};

export default App;

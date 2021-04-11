
import React, { FC } from 'react';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Layout from './components/Layout';

const App: FC = () => {
    return <Layout>
        <Switch>
            <Route path='/app-react/demo/use/memo' component={null} />
            <Route path='/app-angular' component={null} />
            <Redirect to={{ pathname: '/app-react' }} />
        </Switch>
        <div id="root"></div>
    </Layout>
};

export default App;

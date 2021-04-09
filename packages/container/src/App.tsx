
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
            <Route path='/app-react' component={null} />
            <Redirect to={{ pathname: '/app-react' }} />
        </Switch>
    </Layout>
};

export default App;

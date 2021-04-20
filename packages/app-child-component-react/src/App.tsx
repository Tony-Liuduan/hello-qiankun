
import React, { FC } from 'react';
import {
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';


const App: FC = () => {
    return <>
        <h1>app-react-component</h1>
        <Link to='/app-react-component/a'>/app-react-component/a</Link>
        <br />
        <Link to='/app-angular'>/app-angular</Link>
        <div>
            app-react-content, 经过验证通过 loadMicroApp 加载的应用, 应用站内不能有自己的路由
            <Switch>
                <Route path='/app-react-component/a' component={ComponentA} />
                <Route path='/app-react-component/a' component={ComponentB} />
            </Switch>
        </div>
    </>
};

export default App;

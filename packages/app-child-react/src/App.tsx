
import React, { FC } from 'react';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Layout from './components/Layout';
import DemoUseCallback from './demos/useCallback';
import DemoUseContext from './demos/useContext';
import DemoUseEffect from './demos/useEffect';
import DemoUseEventCallback from './demos/useEventCallback';
import DemoUseForceUpdate from './demos/useForceUpdate';
import DemoUseMemo from './demos/useMemo';
import DemoUsePrevious from './demos/usePrevious';
import DemoUseRedux from './demos/useRedux';
import DemoUseRef from './demos/useRef';
import DemoUseState from './demos/useState';
import DemoUseClientRect from './demos/useClientRect';
import DemoUseImperativeHandle from './demos/useImperativeHandle';
import DemoUseDebugValue from './demos/useDebugValue';

const App: FC = () => {
    return <Layout>
        <Switch>
            <Route path='/app-react/use/state' component={DemoUseState} />
            <Route path='/app-react/use/effect' component={DemoUseEffect} />
            <Route path='/app-react/use/ref' component={DemoUseRef} />
            <Route path='/app-react/use/previous' component={DemoUsePrevious} />
            <Route path='/app-react/use/force-update' component={DemoUseForceUpdate} />
            <Route path='/app-react/use/redux' component={DemoUseRedux} />
            <Route path='/app-react/use/context' component={DemoUseContext} />
            <Route path='/app-react/use/memo' component={DemoUseMemo} />
            <Route path='/app-react/use/callback' component={DemoUseCallback} />
            <Route path='/app-react/use/event-callback' component={DemoUseEventCallback} />
            <Route path='/app-react/use/client-rect' component={DemoUseClientRect} />
            <Route path='/app-react/use/imperative-handle' component={DemoUseImperativeHandle} />
            <Route path='/app-react/use/debug-value' component={DemoUseDebugValue} />
            <Route path='/app-angular' component={null} />
            <Redirect to={{ pathname: '/app-react/use/state' }} />
        </Switch>
    </Layout>
};

export default App;

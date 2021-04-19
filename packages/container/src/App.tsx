
import { addGlobalUncaughtErrorHandler, registerMicroApps, start } from 'qiankun';
import React, { FC, useEffect } from 'react';
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { actions } from './actions';
import Layout from './components/Layout';
import { Counter } from './Counter';
import { SubApp } from './SubApp';

const App: FC = () => {

    useEffect(() => {
        addGlobalUncaughtErrorHandler((event) => console.log('addGlobalUncaughtErrorHandler', event));

        fetch('/').then(response => response.text()).then(_data => {
            const userInfo = {
                name: 'hoho',
                phone: '13023008899'
            };

            registerMicroApps(
                [
                    {
                        name: 'angularApp',
                        entry: '//localhost:3004',
                        container: '#root',
                        activeRule: '/#/app-angular',
                        props: {
                            name: 'angularApp',
                            userInfo,
                        },
                    },
                    {
                        name: 'reactApp',
                        entry: '//localhost:3002',
                        container: '#root',
                        activeRule: '/#/app-react',
                        props: {
                            name: 'reactApp',
                            userInfo,
                        },
                    },
                ],
                {
                    // beforeLoad: (app) => console.warn('before load----------------', app.name), // load 只在 html 加载之前执行一次, 之后不再执行
                    // beforeMount: [(app) => console.warn('before mount ++++++++', app.name)],
                },
            );

            start();

            actions.onGlobalStateChange((state, prevState) => {
                console.log("主应用观察者：改变前的值为 ", prevState);
                console.log("主应用观察者：改变后的值为 ", state);
            }, false);

            // console.log('[container-app window]', window); // global window, 微应用 window 做了 proxy 包装处理. TODO: proxy reacher
            // (window as any).AppContainerData = 1000;
            // setTimeout(() => {
            //     console.log('~~~~~~~~~~~', (window as any).reactApp);
            // }, 2000);
        });
    }, [fetch])

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

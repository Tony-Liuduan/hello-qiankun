
import 'zone.js/dist/zone';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import 'antd/dist/antd.css';
import { registerMicroApps, start } from 'qiankun';
import { addGlobalUncaughtErrorHandler } from 'qiankun';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <HashRouter basename='/'>
            <Switch>
                <Route component={App} />
            </Switch>
        </HashRouter>
    </ConfigProvider>,
    document.getElementById('containerRoot'),
);

addGlobalUncaughtErrorHandler((event) => console.log('addGlobalUncaughtErrorHandler', event));

registerMicroApps(
    [
        {
            name: 'angularApp',
            entry: '//localhost:3004',
            container: '#root',
            activeRule: '/#/app-angular',
            props: {
                name: 'angularApp',
            },
        },
        {
            name: 'reactApp',
            entry: '//localhost:3002',
            container: '#root',
            activeRule: '/#/app-react',
            props: {
                name: 'reactApp',
            },
        },
    ],
    {
        // beforeLoad: (app) => console.warn('before load----------------', app.name), // load 只在 html 加载之前执行一次, 之后不再执行
        // beforeMount: [(app) => console.warn('before mount ++++++++', app.name)],
    },
);

start();
console.log('[container-app window]', window); // global window, 微应用 window 做了 proxy 包装处理. TODO: proxy reacher
(window as any).AppContainerData = 1000;
setTimeout(() => {
    console.log('~~~~~~~~~~~', (window as any).reactApp);
}, 2000);

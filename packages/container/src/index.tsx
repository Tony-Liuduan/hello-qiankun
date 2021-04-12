
import 'zone.js/dist/zone';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import 'antd/dist/antd.css';
import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <BrowserRouter basename='/'>
            <Switch>
                <Route component={App} />
            </Switch>
        </BrowserRouter>
    </ConfigProvider>,
    document.getElementById('containerRoot'),
);


registerMicroApps(
    [
        {
            name: 'angularApp',
            entry: '//localhost:4200',
            container: '#root',
            activeRule: '/app-angular',
            props: {
                name: 'angularApp',
            },
        },
        {
            name: 'reactApp',
            entry: '//localhost:5000',
            container: '#root',
            activeRule: '/app-react',
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


import 'zone.js/dist/zone';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import 'antd/dist/antd.css';

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


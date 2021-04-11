import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import 'antd/dist/antd.css';

function render(props: any) {
    const { container } = props;
    ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
                <Switch>
                    <Route component={App} />
                </Switch>
            </BrowserRouter>
        </ConfigProvider>,
        container ? container.querySelector('#root') : document.querySelector('#root')
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
    console.log('[react16] props from main framework', props);
    render(props);
}

export async function unmount(props: any) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

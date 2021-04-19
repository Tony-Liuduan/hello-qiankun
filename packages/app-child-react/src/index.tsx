import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import 'antd/dist/antd.css';
import actions from './shared/actions';

function render(props: any) {
    const { container } = props;
    if (props) {
        // 注入 actions 实例
        actions.setActions(props);
    }
    ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            <HashRouter>
                <Switch>
                    <Route component={App} />
                </Switch>
            </HashRouter>
        </ConfigProvider>,
        container ? container.querySelector('#rootreact') : document.querySelector('#rootreact')
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export async function mount(props: any) {
    render(props);
}

export async function unmount(props: any) {
    const { container } = props;
    actions.offGlobalStateChange();
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#rootreact') : document.querySelector('#rootreact'));
}

(window as any).reactApp = 1;

console.log('[react-app window]', window); // proxy window
console.log((window as any).AppContainerData)
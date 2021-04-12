import { loadMicroApp } from 'qiankun';
import React from 'react';
export class SubApp extends React.Component {
    microApp: any = null;

    componentDidMount() {
        this.microApp = loadMicroApp({
            name: 'qiankun-app-component',
            entry: '//localhost:5001',
            container: '#componentRoot',
            props: { brand: 'qiankun' },
        });
    }

    componentWillUnmount() {
        this.microApp.unmount();
    }

    render() {
        return <div id="componentRoot">subAPP</div>;
    }
}
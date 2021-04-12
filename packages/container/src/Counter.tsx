import React from 'react';
import { actions } from './actions';

export class Counter extends React.Component {
    state = {
        count: 0,
    }

    componentDidMount() {
        setTimeout(() => {
            actions.setGlobalState({ count: this.state.count });
        }, 500);
        // 注册一个观察者函数
        actions.onGlobalStateChange((state, prevState) => {
            // state: 变更后的状态; prevState: 变更前的状态
            console.log("主应用观察者：count 改变前的值为 ", prevState.count);
            console.log("主应用观察者：登录状态发生改变，改变后的 count 的值为 ", state.count);
        });
    }

    addCount = () => {
        this.setState((prev: any) => {
            actions.setGlobalState({ count: prev.count + 1 });
            return  { count: prev.count + 1};
        });
    }

    render() {
        return <>
            <h1>React.useEffect</h1>
            <button onClick={this.addCount}>add-count-all</button>
            <p>count: {this.state.count}</p>
        </>
    }
}
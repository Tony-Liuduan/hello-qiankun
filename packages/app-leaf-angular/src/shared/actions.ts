import { BehaviorSubject } from 'rxjs';

function emptyAction(..._args: any[]) {
    console.warn("Current execute action is empty!");
}

class Actions {
    private parentState$ = new BehaviorSubject<any>({});

    private parentProps: any = {};

    get globalProps() { // 用于父给子传值
        return this.parentProps;
    }

    get globalState$() { // 用于通信交互
        return this.parentState$;
    }

    private actions = {
        onGlobalStateChange: emptyAction,
        offGlobalStateChange: emptyAction,
        setGlobalState: emptyAction,
    };

    setActions({ onGlobalStateChange, setGlobalState, offGlobalStateChange, name, userInfo }) {
        this.actions = {
            onGlobalStateChange: onGlobalStateChange || emptyAction,
            offGlobalStateChange: offGlobalStateChange || emptyAction,
            setGlobalState: setGlobalState || emptyAction,
        };

        // 给全局 props 赋值
        this.parentProps = {
            name,
            userInfo
        };

        if (onGlobalStateChange) {
            this.onGlobalStateChange(() => { }, true)
        }
    }

    offGlobalStateChange() {
        this.actions.offGlobalStateChange();
    }

    onGlobalStateChange(callback: Function, fireImmediately?: boolean) { // fireImmediately = true 立即触发 callback, fireImmediately = false, 需要等 set 之后才能触发
        return this.actions.onGlobalStateChange((state, prevState) => {
            console.log("微应用观察者 angular app：改变前的值为 ", prevState);
            console.log("微应用观察者 angular app：改变后的值为 ", state);
            this.parentState$.next(state);
            return callback(state, prevState);
        }, fireImmediately);
    }

    setGlobalState(state: Record<string, any>) {
        const newState = {
            ...this.parentState$.getValue(),
            ...state,
        };
        this.parentState$.next(newState);
        return this.actions.setGlobalState(newState);
    }
}

const actions = new Actions();
export default actions;
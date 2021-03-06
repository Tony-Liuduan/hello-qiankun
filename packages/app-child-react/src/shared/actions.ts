function emptyAction(..._args: any[]) {
    console.warn("Current execute action is empty!");
}

class Actions {
    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    };

    setActions(actions: any) {
        this.actions = actions;
    }

    onGlobalStateChange(...args: any[]) {
        console.log(this.actions);
        return this.actions.onGlobalStateChange(...args);
    }

    setGlobalState(...args: any[]) {
        return this.actions.setGlobalState(...args);
    }
}

const actions = new Actions();
export default actions;
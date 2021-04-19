import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state: any = {
    count: 0,
};

// 初始化 state
export const actions: MicroAppStateActions = initGlobalState(state);

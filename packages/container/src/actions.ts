import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state = {};

// 初始化 state
export const actions: MicroAppStateActions = initGlobalState(state);

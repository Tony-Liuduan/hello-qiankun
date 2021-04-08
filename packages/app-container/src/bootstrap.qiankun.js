import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'angularApp',
        entry: 'http://localhost:4200/',
        container: '#angular9',
        activeRule: '/app-angular',
    },
]);
// 启动 qiankun
start();
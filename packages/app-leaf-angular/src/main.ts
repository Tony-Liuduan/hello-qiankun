import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import actions from './shared/actions';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render(props) {
  // 注入 actions 实例
  if (props) {
    actions.setActions(props);
  }
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap(props: Object) {
}

export async function mount(props: Object) {
  render(props);
}

export async function unmount(_props: Object) {
  actions.offGlobalStateChange();
  // @ts-ignore
  app.destroy();
}
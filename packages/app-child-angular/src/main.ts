import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render(props) {
  // TODO: 注册全局 service, 管理登录信息 by props
  console.log(props);
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap(props: Object) {
  console.log(props);
}

export async function mount(props: Object) {
  render(props);
}

export async function unmount(props: Object) {
  // @ts-ignore
  app.destroy();
}
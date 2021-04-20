# qiankun

## 子应用路由组合最佳实践

启动服务

```sh
yarn
npm run dev
```

访问: <http://localhost:3001>

### 主应用

* FIXME: webpack5: 子-history, webpack-dev 不能开启 historyApiFallback, 由于webpack5 各种问题, 切换回 webpack4

#### 主应用-angular

<http://localhost:4201>

#### 主应用-react

<http://localhost:3001>

### 微应用

#### 微应用-angluar

<http://localhost:3004>

* FIXME: angular 作为子应用加载无法热更新, 主应用: react angular 均无效

#### 微应用-react

<http://localhost:3002>
<http://localhost:3003>

## 路由跳转

> <https://juejin.cn/post/6856569463950639117#heading-21>

### 主-history, 子-hash/history

* js history 跳转有效, Link 跳转不能定位到子路由
* 子应用 hash 路由时, 刷新会把 # 后面值丢掉
* 缺点: 父子跳转, 子子跳转都要用 js history 跳转
  
### 主-hash, 子-history

### 主-hash, 子-hash

优点:能通
缺点:不能写 hash-baseRouter, 不然子应用之间不能跳转

## 数据共享

> <https://segmentfault.com/a/1190000022631614>

### qiankun API

initGlobalState

### redux

TODO: ...

## 第三方依赖复用

> <https://juejin.cn/post/6856569463950639117#heading-25>
TODO: ...

## 静态资源头设置 cors

js css, 需要 fetch 请求, 所以必须设置静态资源跨域处理
注意不含 img

```sh
access-control-allow-origin: *
```

```js
// dev
// webpack-dev-server 处理
headers: {
            'Access-Control-Allow-Origin': '*',
},
```

```sh
## test

## https://segmentfault.com/a/1190000012550346
## html js css 都需要配置
location / {  
    add_header Access-Control-Allow-Origin 'http://foo.example';
    add_header Access-Control-Allow-Credentials 'true';
    add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, HEAD';
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

    if ($request_method = 'OPTIONS') {
        return 204;
    }
}
```

```sh
## production

## js css 静态资源在cdn, 已支持 cors, 无需配置
## html 资源需要配置跨域访问响应头
location / {  
    add_header Access-Control-Allow-Origin 'http://foo.example';
    add_header Access-Control-Allow-Credentials "true";
    add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, HEAD';
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

    if ($request_method = 'OPTIONS') {
        return 204;
    }
}
```

## 字体 404 处理

<https://juejin.cn/post/6856569463950639117#heading-11>

让字体文件经过 url-loader 的处理，打包成 base64 ，就可以解决这个问题了

```js
// webpack.config.js
            {
                test: /.(ttf|otf|eot|woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve('src'),
                loader: 'url-loader',
            },
```

## qiankun load js 步骤

1. fetch html, html 不能缓存, 需要 cors 支持
2. fetch js, 缓存在内存中, 需要 cors 支持 (浏览器支持500M)
3. async defer 检查
4. 全部 load 完成后, 按顺序 eval 执行 js

```js
//内联js
eval(`;(function(window){;${inlineScript}\n}).bind(window.proxy)(window.proxy);`)
//外链js
eval(`;(function(window){;${downloadedScriptText}\n}).bind(window.proxy)(window.proxy);`)
```

我们在写微应用会把 qiankun 的生命周期暴露出去, 可以理解为: `window['app-react-main'] = {bootstrap, mount, unmount}`

```js
export async function bootstrap(props: Object) {
  console.log(props);
}

export async function mount(props: Object) {
  render();
}

export async function unmount(props: Object) {
}
```

## 父子应用参数传递

1. 在 registerMicroApps 中通过 props 传递给子应用
2. 挂载到主应用 window 上, 全局可访问
3. 需要交互通信时, 可使用 initGlobalState, 详见: `packages/app-child-angular/src/shared/actions.ts`

## qiankun 嵌套

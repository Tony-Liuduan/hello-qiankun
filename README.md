# qiankun

## 子应用路由组合最佳实践

启动服务

```sh
yarn
npm run dev
```

访问: <http://localhost:3001>

### 主应用

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

### 遇到的坑

## 子应用以组件方式加载最佳实践

## 路由跳转

> <https://juejin.cn/post/6856569463950639117#heading-21>

### 主-history, 子-hash/history

* js history 跳转有效, Link 跳转不能定位到子路由
* 子应用 hash 路由时, 刷新会把 # 后面值丢掉
* FIXME: 子-history, webpack-dev 不能开启 historyApiFallback
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

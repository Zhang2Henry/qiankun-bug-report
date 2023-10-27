# sub

# 测试乾坤的子项目

已经实现父子路由同体，可以参考 main/src/main.ts 中的 bi 微应用定义
父应用拦截所有的 /bi/xx 路由，移交给子应用处理。

子应用从父应用接收 appName，然后加入路由中。
（现在是主动给所有路由拼接了 appName，不知道为何设置router的base属性，会导致父应用路由重复）

待处理问题：
子路由只能静态加载，需要考虑如何进行动态加载。
(已处理，可能是qiankun的bug)


## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# platform

bug 复现
未使用monorepo，请单独 install & server sub 和 main 应用。

# 步骤
```cmd

cd sub
pnpm install
pnpm run serve

cd ../main
pnpm install
pnpm run serve

```

直接打开 http://localhost:8080/#/bi/about  可见报错。
或者
打开 http://127.0.0.1:8080/ 点击第一级菜单 子应用about（动态）。但有时候点击按钮没有反应也无报错信息。

// sub/src/App.vue 中添加 <qiankun-head></qiankun-head> 也可以处理该问题。

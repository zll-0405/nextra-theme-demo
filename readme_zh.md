# Nextra-theme demo

**阅读英文版: [English](readme.md).**

这是一个基于 nextra 开发的小 demo ，尽可能的做到了开箱即用，如果你需要的话，可以用它来搭建你的网站

可以在这里看效果: []()

next 版本： 14.2.1 <br/>
nextra 版本： 2.13.4 <br/>
nextra-theme-docs 版本： 2.13.4 <br/>

## 如何运行项目？

在运行项目之前，请确定已安装 node/pnpm 等

将本项目克隆到本地，运行命令：`pnpm install` & `pnpm dev`，就可以在 `http://localhost:3000` 看到界面了

## 如何修改项目内容，让它变为我的专属？

### 更改网站名称

你可以在该项目中搜索 `nextra theme demo`，然后将它替换成你的网站名称即可

### 网站右上角的 buy me a coffee 我想要替换成 github 仓库

在 `theme.config.tsx` 中，有 `project` 这一项，将它的 `link` 更改为你的仓库地址即可，同时记得将 `icon` 删掉

网站底部的 buy me a coffee 是手动写的，你可以在 `theme.config.tsx` 中找到 `footer` 配置项进行更改

### 如何更改网站的小图标

将 `/public` 目录下的 `logo.png` 进行替换即可

## 多语言版本

main 分支默认为多语言版本，如果想要非多语言版本，可移步分支 [without-i18n]()

如果它对你有用，可以请我喝杯咖啡 👉 [buy me a coffee](https://ko-fi.com/lulubiu)
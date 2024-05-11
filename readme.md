# Nextra-theme demo

**Read this in chinese languages: [中文](readme_zh.md).**

This is a demo developed based on nextra. It is as out-of-the-box as possible. If you need it, you can use it to build your website.

You can see this demo through [https://nextra-theme-demo.vercel.app/](https://nextra-theme-demo.vercel.app/)

next version: 14.2.1 <br/>
nextra version: 2.13.4 <br/>
nextra-theme-docs version: 2.13.4 <br/>

## How to run the project?

Before running the project, make sure node/pnpm etc. are installed

Clone this project locally, run the commands: `pnpm install` & `pnpm dev`, and you can see the interface at `http://localhost:3000`

## How to modify the project content to make it exclusive to me?

### Change website name

You can search for `nextra theme demo` in this project and replace it with your website name

### I want to replace buy me a coffee in the upper right corner of the website with github address

In `theme.config.tsx`, there is a `project` item, just change its `link` to your github address, and remember to delete `icon`

The buy me a coffee at the bottom of the website is written manually. You can find the `footer` configuration item in `theme.config.tsx` to change it.

### How to change the website icon

Just replace `logo.png` in the `/public` directory

## Multi-language

The main branch defaults to a multi-language version. If you want a non-multi-language version, you can move to the branch: [without-i18n](https://github.com/zll-0405/nextra-theme-demo/tree/without-i18n)

If it's helpful for you, you can 👉 [buy me a coffee](https://ko-fi.com/lulubiu)
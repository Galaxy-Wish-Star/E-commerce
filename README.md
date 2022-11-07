# E-commerce

电商购项目

![](https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E4%B8%AD-green)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![](https://img.shields.io/crates/l/s)](https://img.shields.io/crates/l/s)
[![](https://img.shields.io/badge/Vue%2Fcli-%20%5E2%2F%20%5E5.0.8-brightgreen)](https://img.shields.io/badge/Vue%2Fcli-%20%5E2%2F%20%5E5.0.8-brightgreen)
[![](https://img.shields.io/badge/Node-%20%5E16.18.0-brightgreen)](https://img.shields.io/badge/Node-%20%5E16.18.0-brightgreen)

## 内容列表

- [E-commerce](#e-commerce)
  - [内容列表](#内容列表)
- [Git规范](#git规范)
  - [Git分支命名](#git分支命名)
- [Git Commit Message格式](#git-commit-message格式)
  - [type 提交类型：](#type-提交类型)
  - [subject 提交描述](#subject-提交描述)
  - [相关仓库](#相关仓库)
  - [维护者](#维护者)
  - [如何贡献](#如何贡献)
  - [贡献者](#贡献者)
  - [页面描述](#页面描述)
  - [安装使用](#安装使用)
- [安装依赖](#安装依赖)
- [开启服务器，浏览器访问 http://localhost:8080](#开启服务器浏览器访问-httplocalhost8080)
- [特别感谢：](#特别感谢)
- [使用许可](#使用许可)

---
# Git规范
## Git分支命名
* `master`：主分支，负责记录上线版本的迭代，该分支代码与线上代码是完全一致的。
* `develop`：开发分支，该分支记录相对稳定的版本，所有的feature分支和bugfix分支都从该分支创建。其它分支为短期分支，其完成功能开发之后需要删除
* `feature/*`：特性（功能）分支，用于开发新的功能，不同的功能创建不同的功能分支，功能分支开发完成并自测通过之后，需要合并到 develop 分支，之后删除该分支。
* `bugfix/*`：bug修复分支，用于修复不紧急的bug，普通bug均需要创建bugfix分支开发，开发完成自测没问题后合并到 develop 分支后，删除该分支。
* `release/*`：发布分支，用于代码上线准备，该分支从develop分支创建，创建之后由测试同学发布到测试环境进行测试，测试过程中发现bug需要开发人员在该release分支上进行bug修复，所有bug修复完后，在上线之前，需要合并该release分支到master分支和develop分支。
* `hotfix/`*：紧急bug修复分支，该分支只有在紧急情况下使用，从master分支创建，用于紧急修复线上bug，修复完成后，需要合并该分支到master分支以便上线，同时需要再合并到develop分支。


# Git Commit Message格式
type : subject

## type 提交类型：
* `feature`: 新特性
* `fix`: 修改问题
* `style`: 代码格式修改
* `test`: 测试用例修改
* `docs`: 文档修改
* `refactor`: 代码重构
* `misc`: 其他修改, 比如构建流程, 依赖管理
## subject 提交描述

对应内容是commit 目的的简短描述，一般不超过50个字符

---

## 相关仓库

- [Web_DEV_ING](https://github.com/Galaxy-Wish-Star/Web_DEV_ING) — 💌 Galaxy-Wish-Star 团队的开发进程
- [美香稻](https://github.com/Galaxy-Wish-Star/Rural-revitalization-agricultural-assistance-services) — 乡村振兴，助农服务前端开发项目

## 维护者

[@mason369](https://github.com/mason369)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/Galaxy-Wish-Star/Rural-revitalization-agricultural-assistance-services/issues) 或者提交一个 Pull Request，在项目文件夹放入自己的代码文件夹。
详情参照[CONTRIBUTING](CONTRIBUTING.md)

Rural-revitalization-agricultural-assistance-services 遵循 [Code of conduct](./CODE_OF_CONDUCT.md) 行为规范。

## 贡献者

<a href="https://github.com/liusxs"><img style="border-radius:50%;height:60px" src="https://avatars.githubusercontent.com/u/101164913?v=4" /></a>

<a href="https://github.com/mason369"><img style="border-radius:50%;height:60px" src="https://avatars.githubusercontent.com/u/93964390?s=96&v=4" /></a>

<!-- <a href="https://github.com/lcwkbook"><img style="border-radius:50%;height:60px" src="https://avatars.githubusercontent.com/u/91841280?v=4" /></a> -->

感谢以上参与项目的人

**当前进度**：

- [x] 人员招募
- [x] 方案设计
- [ ] 编码
- [ ] Debug 测试
- [ ] 完成！

## 页面描述

- [ ] 登陆
- [ ] 商城首页
- [ ] 商品详情
- [ ] 购物车
- [ ] 我的收藏
- [ ] 订单管理
- [ ] 个人信息管理

## 安装使用

首先确保你的电脑安装了 Nodejs

# 安装依赖

```bash
npm install
```

# 开启服务器，浏览器访问 http://localhost:8080

```bash
npm run serve
```

# 特别感谢：

[IntelliJ WebStorm](https://zh.wikipedia.org/zh-hans/IntelliJ_IDEA) 是一款在各方面最大限度地提高开发人员生产力的 IDE，适用于前端平台语言。

<img src="https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.png?_gl=1*10616q8*_ga*MTEwMzE4MDQwOS4xNjU0NzQ0NjIw*_ga_9J976DJZ68*MTY1NTA5NzcyOC4yLjEuMTY1NTA5ODE3Ni42MA..&_ga=2.237879491.294686240.1655097729-1103180409.1654744620" width="200px"/>

[Visual Studio Code](https://code.visualstudio.com/)在 Windows、macOS 和 Linux 上运行的独立源代码编辑器。 JavaScript 和 Web 开发人员的最佳选择，具有几乎可支持任何编程语言的扩展。

<img src="https://visualstudio.microsoft.com/wp-content/uploads/2019/09/vs-code-responsive-01-1.png" width="200px"/>

# 使用许可

[Apache License 2.0](LICENSE) © Richard Littauer

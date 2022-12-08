![logo](https://raw.githubusercontent.com/kensoz/FEC/main/public/logo.png)



![example workflow](https://github.com/kensoz/FEC/actions/workflows/dispatch.yml/badge.svg)  [![codecov](https://codecov.io/gh/kensoz/FEC/branch/main/graph/badge.svg?token=2THJ19HFZW)](https://codecov.io/gh/kensoz/FEC)  ![Node](https://img.shields.io/badge/Node.js-v18.7.0-fb7185.svg?logo=&style=flat-square)  ![npm](https://img.shields.io/badge/npm-v0.3.0-84CC16.svg?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

前端技术收集网站Front-End-Collection (FEC)，有助于您的学习和研究，并且可以生成用在简历中的专属的技能清单，详细就在下面的网站中体验吧。

🍋 [FEC Site](https://fec-tau.vercel.app/)



## 技术栈

- ⚡️ Next.js + TypeScript
- 🎨 TailwindCSS
- 📑 ESLint + Prettier
- 🔌 Jest + Testing Library
- 🔩 GitHub Actions + Vercel
- 🔗 Node.js + Inquirer.js
- 💽 Firebase



## 使用

##### 安装

```shell
yarn install
```

##### 开发

```shell
yarn dev
```

##### 用Docker

```
docker build . -t fec
docker run --name fec -p 8011:8011 -d fec
```

项目将在[http://localhost:8011](http://localhost:8011)启动，**Lint**、**Test**等等脚本请参考`package.json`文件



# Contributing & Issues

+ BUG，过时的内容请在[Issues](https://github.com/kensoz/FEC/issues)报告
+ 内容追加请参考[Contributing方法](https://github.com/kensoz/FEC/blob/main/.github/doc/contri.md)



## 免责声明

- 内容，著作权等请参考[免责声明](https://github.com/kensoz/FEC/blob/main/.github/doc/disclaimer/zh.md)
- FEC代码的许可证：MIT
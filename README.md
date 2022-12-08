![logo](https://raw.githubusercontent.com/kensoz/FEC/main/public/logo.png)



![example workflow](https://github.com/kensoz/FEC/actions/workflows/dispatch.yml/badge.svg)  [![codecov](https://codecov.io/gh/kensoz/FEC/branch/main/graph/badge.svg?token=2THJ19HFZW)](https://codecov.io/gh/kensoz/FEC)  ![Node](https://img.shields.io/badge/Node.js-v18.7.0-fb7185.svg?logo=&style=flat-square)  ![npm](https://img.shields.io/badge/npm-v0.3.0-84CC16.svg?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

[简体中文](https://github.com/kensoz/FEC/blob/main/.github/doc/readme/zh.md) ・ [English](https://github.com/kensoz/FEC/blob/main/.github/doc/readme/en.md)

Webフロントエンド技術まとめサイトのFront-End-Collection (FEC)です。モダンなフロントエンド技術を探し、経験した技術を出力することによって、学習、研究、就活転職で活用できます。詳しくは[サイト](https://fec-tau.vercel.app/)にて確認しましょう！

🍋 [FEC Site](https://fec-tau.vercel.app/)



## スタック

- ⚡️ **Next.js + TypeScript**：SSGの静的Web サイト作成
- 🎨 **TailwindCSS**：レスポンシブ、ダックモードに対応
- 📑 **ESLint + Prettier**：コードチェックと整形
- 🔌 **Jest + Testing Library**：自動Unitテスト、カバレッジ80%以上
- 🔩 **GitHub Actions + Vercel**：CD/CIと自動デプロイ
- 🔗 **Node.js + Inquirer.js**：データ入力CLI作成
- 💽 **Firebase**：データ管理



## 使用

##### インストール

```shell
yarn install
```

##### 開発

```shell
yarn dev
```

##### Docker使用

```
docker build . -t fec
docker run --name fec -p 8011:8011 -d fec
```

プロジェクトは[http://localhost:8011](http://localhost:8011)にて起動で、**Lint**、**Test**などは`package.json`にてご確認お願いいたします



# Contributing & Issues

+ BUGや古くなっている情報のIssues Reportは[ここ](https://github.com/kensoz/FEC/issues)にてお願いいたします
+ データの追加などのContributingは[Contributing手順](https://github.com/kensoz/FEC/blob/main/.github/doc/contri.md)にて参照ください



## 免責事項

- 詳しくは[免責事項](https://github.com/kensoz/FEC/tree/main/.github/doc/disclaimer)にてご確認お願いいたします
- FECソースコードのライセンス：MIT

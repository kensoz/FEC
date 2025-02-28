![logo](https://raw.githubusercontent.com/kensoz/FEC/main/public/logo.png)



![github](https://github.com/kensoz/FEC/actions/workflows/dispatch.yml/badge.svg)  [![codecov](https://codecov.io/gh/kensoz/FEC/branch/main/graph/badge.svg?token=2THJ19HFZW)](https://codecov.io/gh/kensoz/FEC)  ![Node](https://img.shields.io/badge/Node.js-v22.14.0-fb7185.svg?logo=&style=flat-square)  ![npm](https://img.shields.io/badge/npm-v0.5.0-84CC16.svg?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

[简体中文](https://github.com/kensoz/FEC/blob/main/.github/doc/readme/zh.md) ・ [English](https://github.com/kensoz/FEC/blob/main/.github/doc/readme/en.md)

200以上のWebフロントエンド技術まとめサイトのFront-End-Collection (FEC)です。モダンな技術を探し、経験した技術を出力することが可能で、学習、就活や転職の様々なシーンで活用できます。詳しくは[サイト](https://fec-tau.vercel.app/)にて確認しましょう！

🍋 [FEC Site](https://fec-tau.vercel.app/)



## スタック

- ⚡️ **Next.js + TypeScript**：多言語対応のSSGの静的Web サイト作成
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

プロジェクトは[http://localhost:8011](http://localhost:8011)にて起動でします



## Contributing & Issues

+ BUGや古くなっている情報のは[Issues](https://github.com/kensoz/FEC/issues)にてお願いいたします
+ データの追加や更新したい場合は[データ追加と更新](https://github.com/kensoz/FEC/blob/main/.github/doc/data.md)にて参照ください



## Architecture

![architecture](https://raw.githubusercontent.com/kensoz/FEC/main/.github/doc/public/architecture.jpg)



## 免責事項

- コンテンツ、著作権など詳しくは[免責事項](https://github.com/kensoz/FEC/tree/main/.github/doc/disclaimer)にてご確認お願いいたします
- FECソースコードのライセンス：MIT

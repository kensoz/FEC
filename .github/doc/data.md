# データ追加と更新

🍋 **FEC**はデータの更新と修正を歓迎します。追加または更新する前に、[Issues](https://github.com/kensoz/FEC/issues)に行って追加または更新リクエストを行うことはできます。何かコンテンツの貢献することに決めた場合は、必ずコンテンツの著作権ルール、ライセンスに従ってください（**FEC**の[免責事項](https://github.com/kensoz/FEC/tree/main/.github/doc/disclaimer)）。**GitHub** を初めて使用する場合は、[GitHubのガイド](https://docs.github.com/ja/get-started/quickstart/github-flow)を参照することをお勧めします。



## 流れ

1. **FEC**リポジトリを`Fork`して、自分のローカルに`Clone`します。
2. 作業用ブランチを新規作成します。
3. 新しいブランチで修正または更新します。
4. `Fork`した**Github**リポジトリに新しいブランチを`Commit`と`push`します。
5. `pull request`をします。



## セットアップ

**環境：**

- **Node.js**
- **Git**
- **yarn**、**npm**または**pnpm**



**インストール：**

```shell
yarn install
```

**Docker使用：**

```
docker build . -t fec
docker run --name fec -p 8011:8011 -d fec
```



## データの追加

まずはデータ追加CLIからはじめます。CLIのステップに従って必要な項目を入力してお願いいたします。

```sh
yarn json:add
```

#### Step 1.Enter the name.

技術名を入力してください、Simple Iconsのアイコンを使って技術のLogoを表示しますので、[Simple Icons](https://simpleicons.org/)で技術名を検索することをお勧めします。Simple Iconsにない場合は、そのまま入力してください。

例：`Vue.js`

#### Step 2.Is there an Icon in Simple Icons ?

Simple Iconsに入力したい技術のアイコンはありますでしょうか、あれば、続けてカラーを入力して、LogoのIconが表示できます。なれば、テキストだけ表示します。

例：`Y`

#### Step 2.1  Enter the hex color.

続けてカラーを入力します。[Simple Icons](https://simpleicons.org/)で技術名を検索することをお勧めします。

例：`#4FC08D`

#### Step 3.Choose A type.

カテゴリーを選択します。

例：`1`を選択します。

#### Step 4.Enter the description.

この技術の紹介文（英語）を入力します。日本語と中国語の紹介文も入力必要です。

例：

-  en：`The Progressive JavaScript Framework`
-  zh：`渐进式JavaScript框架`
-  ja： `Web UI構築のためのJSフレームワーク`

#### Step 5.Enter the homepage URL.

この技術の公式URL（英語）を入力します。日本語公式と中国語公式も入力可能です。

例：

-  en：`https://vuejs.org/`
-  zh：`https://cn.vuejs.org/`
-  ja： `https://ja.vuejs.org/`

#### Step 6.Do you hava any related pages ?

知っている関連サイトはありますでしょうか、あれば、続けてこの技術の関連サイト（英語）を入力します。日本語関連サイトと中国語関連サイトも入力可能です。各言語で最大二つの関連サイトが追加できます。



#### サンプル

`list.json`にて

```json
[{
    "id": "1",
    "groupId": 1,
    "groupName": "javascript",
    "name": "Vue.js",
    "color": "4FC08D",
    "description": "The Progressive JavaScript Framework",
    "descriptionZh": "渐进式JavaScript框架",
    "descriptionJa": "Web UI構築のためのJSフレームワーク",
    "url": "https://vuejs.org/",
    "urlZh": "https://cn.vuejs.org/",
    "urlJa": "https://ja.vuejs.org/",
    "related": [],
    "relatedZh": [],
    "relatedJa": []
  }]
```



## データの更新

`list.json`ファイルにて更新したいデータを更新してお願いいたします。



## 追加と更新の後のチェック

`list.json`ファイルのフォーマットを確認しましょう。

```sh
yarn json:check
```

フォーマットチェック、修正します。

```sh
yarn check:all
yarn fix:all
```

プログラムを修正したら、自動テストを実行します。

```sh
yarn test
```



## 最後

最後までありがとうございます。上記のステップは全部完了できたら、確認してマージをしますので、`pull request`をお願いいたします! 😀
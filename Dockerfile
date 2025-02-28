# ----- FEC -----
# Node.jsイメージ指定
FROM node:22.14.0

# 作者指定
LABEL maintainer="renhou"

# ワークスペース指定
WORKDIR /usr/src/fec

# package.jsonとyarn.lockコピー
COPY ["package.json", "yarn.lock", "./"]

# インストール
RUN yarn

# ファイルコピー
COPY . .

# ビルド
RUN yarn build

# ポートの解放
EXPOSE 8011

# コンテナ実行
ENTRYPOINT [ "yarn", "start" ]

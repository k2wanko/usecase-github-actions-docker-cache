FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./

ARG NPM_CI_ARGS=--omit=dev
RUN npm ci $NPM_CI_ARGS

# *.test.js も含まれてしまうが、実際の開発ではバンドルを活用してうまく除外してください
COPY lib lib

CMD ["node", "lib/index.js"]
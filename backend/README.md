# Backend

## init
```sh
npm init -y
```

## dependencies install
```sh
npm i express cors mongoose dotenv
```
* [`express`](https://www.npmjs.com/package/express)
* [`cors`](https://www.npmjs.com/package/cors) : [`교차 출처 리소스 공유`](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
* [`mongoose`](https://www.npmjs.com/package/mongoose)
* [`dotenv`](https://www.npmjs.com/package/dotenv) : .env를 통해 key들을 관리하고 외부로의 노출을 차단

## devDependencies install

```sh
npm i -D nodemon
```

* [`nodemon`](https://nodemon.io/) : Utility that will monitor for any changes in your source and automatically restart your serve

```ts
  "scripts": {
    "start": "nodemon server.js"
  },
```

## router
server.js
```ts
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
```
* 각 uri에 route는 해당 router를 실행.

## [`rest api`](https://zetawiki.com/wiki/REST_API)

## server 실행

```sh
npm start
```
# Frontend

[`Create React App`](https://create-react-app.dev/docs/getting-started/#npm)

* Set up a react web app by running one command.

```sh
npx create-react-app .
```
. 은 현재 diretory를 뜻하며 위 코드를 terminal > cmd를 통해 입력하면 간단하게 single-page React appllication을 생성할수있다.

## react 간단 이해

* index.js에서 App jsx를 document(index.html)에 'root' 이름을 가진 elemetent에 추가하는 rendering을 한다


```ts
index.js

ReactDOM.render(<App />, document.getElementById('root'));
```

```ts
index.html

<div id="root"></div>
```

## dependencies

```sh
npm i bootstrap react-router-dom react-datepicker axios
```

* [`bootstrap`](https://www.npmjs.com/package/bootstrap)
* [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
* [`react-datepicker`](https://www.npmjs.com/package/react-datepicker)
* [`axios`](https://www.npmjs.com/package/axios)

## client 실행
* server가 실행중이여야한다.

```sh
npm start
```
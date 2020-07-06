import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/*코드를 통해서 내부적으로 state 값이 있는지 없는지 알 수 없다. 외부에서 알 필요가 없는 정보는 숨기는 것이 좋은 사용성을 만드는 핵심이다*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

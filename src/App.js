import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class Subject extends Component{
  //class 안에 속한 함수는 function을 생략한다
  render(){
    return ( //component를 만들 때 하나의 최상위 태그만을 가진다.
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }  
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href='1.html'>HTML</a></li>
          <li><a href='2.html'>CSS</a></li>
          <li><a href='3.html'>JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language
      </article>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <TOC/>
        <Content/>
      </div>
    );
  }
}

//현재 이 코드들은 JavaScript가 아니다. JSX이다.
//JSX를 create-react-app이 JSX를 JS로 converting한다.
//컴포넌트 일종의 정리정돈 도구(복잡도를 획기적으로 줄임)

export default App;

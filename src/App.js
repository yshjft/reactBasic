import React, {Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Cotent';
import Subject from './components/Subject';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  //어떠한 컴포넌트가 실행될 때 render라는 함수 보다 먼저 실행이 되면서 그 컴포넌트를 초기화해주고 싶은 코드는 contructor 안에다가 코드를 작성한다.
  //컴포넌트가 실행될 때 constructor라는 함수가 있다면 제일 먼저 실행되서 초기화를 담당한다.
  constructor(props){ 
    super(props);
    this.state={
      Subject:{title:"web", sub:"world wide web!"},
      Contents:[
        {id:1, title:'html', desc:'아몰랑'},
        {id:2, title:'CSS', desc:'아몰랑123'},
        {id:3, title:'JavaScript', desc:'아몰랑123abc'},
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}/>
        <TOC data={this.state.Contents}/>
        <Content title="HTML" desc="HTML is HTML is HyperText Markup Language "/>
      </div>
    );
  }
}

//현재 이 코드들은 JavaScript가 아니다. JSX이다.
//JSX를 create-react-app이 JSX를 JS로 converting한다.
//컴포넌트 일종의 정리정돈 도구(복잡도를 획기적으로 줄임)
//props를 이용하여 다른 결과를 만들어내는 컴포넌트를 만들 수 있다

//App이 내부적으로 사용할 상태는 state를 통해 사용한다.
//state 값을 Subject라고 하는 component에 props의 값으로 주었다. 
//상위 컴포넌트인 App의 상태를 하위 컴포넌트로 전달하고 싶을 때는 상위 컴포넌트의 state값을 하위 컴포넌트의 props의 값으로 전달하는 것은 얼마든지 가능하다.
export default App;
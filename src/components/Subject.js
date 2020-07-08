import React, {Component} from 'react';

class Subject extends Component{
  //class 안에 속한 함수는 function을 생략한다
  render(){
    return ( //component를 만들 때 하나의 최상위 태그만을 가진다.
      <header>
        <h1><a href="/" onClick={function(e){ // 현재 함수에서 this는 undefined 상태이다. 따라서 bind를 사용한다.
          e.preventDefault(); // 이벤트가 일어난 태그의 기본적인 도작 방법을 막는다.
          this.props.onChangePage(); //함수가 props가 전달된다
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }  
}

export default Subject;
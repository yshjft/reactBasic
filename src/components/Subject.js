import React, {Component, createElement} from 'react';

class Subject extends Component{
  //class 안에 속한 함수는 function을 생략한다
  render(){
    return ( //component를 만들 때 하나의 최상위 태그만을 가진다.
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }  
}

export default Subject;
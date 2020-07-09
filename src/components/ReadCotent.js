import React, {Component} from 'react';

class ReadContent extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2> 
        {this.props.desc}
      </article>
    );//컴포넌트 안에서 props를 바꾸는 것은 금지
  }
}

export default ReadContent;
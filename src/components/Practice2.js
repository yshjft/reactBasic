import React, {Component} from 'react';

class Practice2 extends Component{
  render(){
    return(
      <div id="componentWithProps">
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>
      </div>
    );
  }
}

export default Practice2;
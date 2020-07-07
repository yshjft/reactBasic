import React, {Component} from 'react';


class Practice3 extends Component{
  render(){
    var list=[];
    var data=this.props.contents;
    var i=0;
    while(i<data.length){
      list.push(<li key={data[i].id}>{data[i].text}</li>);
      i++;
    }

    return(
      <div id="componentWithState">
        <h1>{this.props.title}</h1>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default Practice3;
//react라고 하는 라이브러리에서 컴포넌트라고 하는 class를 로딩
//React는 개발시 무조건 있다고 생각할 것
import React, {Component} from 'react'; 

class TOC extends Component{
  render(){
    var lists=[];
    var data=this.props.data;
    var i=0;
    while(i < data.length){
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      i=i+1;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
//react라고 하는 라이브러리에서 컴포넌트라고 하는 class를 로딩
//React는 개발시 무조건 있다고 생각할 것
import React, {Component} from 'react'; 

class TOC extends Component{
  shouldComponentUpdate(newProps, newState){ //TOC 컴포넌트가 App의 Contnets 바뀌지 않았는데도 render되므로 shoudlCompoenetUpdate를 사용하여 render함수가 실행될지를 결정한다.
    if(newProps.data === this.props.data){ //newProps.data : 바뀐값 , this.props.data : 기존 값(이전의 값) 
      return false; //변경 사항이 없으므로 TOC 컴포넌트의 render 함수를 호출하지 않는다.
    }
    return true; // 변경 사항이 있으므로 TOC 컴포넌트의 render 함수를 호출한다.
  }
  render(){
    var lists=[];
    var data=this.props.data;
    var i=0;
    while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id} //data-라는 접두사로 시작되는 속성은 dataset이라는 것을 접근 가능하다.(현재 data-id이므로 dataset에서 id를 접근하면 된다.)
            onClick={function(e){ //e.target : 이벤트가 발생한 태그를 가리킨다(현재는 a 태그를 가리킨다)
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            
            //아래는 e.target을 이용하지 않는 방식
            // onClick={function(id, e){
            //   e.preventDefault();
            //   this.props.onChangePage(id);
            // }.bind(this, data[i].id)} bind에 2번째 인자로 들어온 값을 함수의 첫번째 인자로 사용한다. 기존 인자들은 한칸씩 밀린다.
          
          >{data[i].title}</a>
        </li>);
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
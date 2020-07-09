import React, {Component} from 'react';

class CreateContent extends Component{
  render(){
    return(
      <article>
        <h2>Create</h2> 
        <form action="/create_process" method="post"
          onSubmit={function(e){ //onSubmit : form태그 안에 있는 submit 버튼을 누르면 이벤트를 호출, HTML form의 고유한 기능 
            e.preventDefault(); //onSubmit으로 인한 페이지 변경이 일어나지 않도록 막음.
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
            
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p>
            <textarea name="desc" placeholder="description"></textarea> {/*textarea는 입력할 내용이 여러줄일 때 쓰는 것이다*/}
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );//컴포넌트 안에서 props를 바꾸는 것은 금지
  }
}

export default CreateContent;
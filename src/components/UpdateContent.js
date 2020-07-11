import React, {Component} from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state={
      id:this.props.data.id, //어디를 업데이트 할 것인지에 대한 식별자 역할
      title:this.props.data.title,
      desc:this.props.data.desc,
    }
    this.inputFormHandler = this.inputFormHandler.bind(this); //함수마다 뒤에 .bind(this) 안 붙이도록 한다.
  }
  inputFormHandler(e){ //e.target.name(이벤트가 발생한 태그의 name) 값이 []에 들어옴
    this.setState({[e.target.name] : e.target.value});
  }

  render(){
    return(
      <article>
        <h2>Update</h2> 
        <form action="/create_process" method="post"
          onSubmit={function(e){ //onSubmit : form태그 안에 있는 submit 버튼을 누르면 이벤트를 호출, HTML form의 고유한 기능 
            e.preventDefault(); //onSubmit으로 인한 페이지 변경이 일어나지 않도록 막음.
            this.props.onSubmit( // props로 받은 함수 호출
              this.state.id,
              this.state.title,
              this.state.desc,
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input> {/* hidden form, 식별자를 위해서 사용 */}
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title}
              //input태그 value 수정시 반드시 사용해야 한다.
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea 
              name="desc" 
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}>
            </textarea> {/*textarea는 입력할 내용이 여러줄일 때 쓰는 것이다*/}
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
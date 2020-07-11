import React, {Component} from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadCotent';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

//연습용 컴포넌트
import './App.css';
import Practice1 from './components/Practice1';
import Practice2 from './components/Practice2';
import Practice3 from './components/Practice3';
import MealTime from './components/Meal/MealTime';
import MealContent from './components/Meal/MealContent';


class App extends Component {
  //어떠한 컴포넌트가 실행될 때 render라는 함수 보다 먼저 실행이 되면서 그 컴포넌트를 초기화해주고 싶은 코드는 contructor 안에다가 코드를 작성한다.
  //컴포넌트가 실행될 때 constructor라는 함수가 있다면 제일 먼저 실행되서 초기화를 담당한다.
  // state 값이 변경되면 state를 가지고 있는 컴포넌트의 render()함수가 다시 호출된다. render 함수가 재호출됨에 따라 하위에 있는 컴포넌트들의 render 함수도 모두 호출된다.
  //react에서는 props의 값이나 state 값이 바뀌면 해당되는 컴포넌트의 render함수가 호출되도록 약속되어 있다.
  //즉, props나 state 값이 바뀌면 화면이 다시 그려진다.
  constructor(props){ 
    super(props);
    this.max_content_id=3; //UI에 영향을 주지 않는 정보라 state에 저장하지 앟는다.
    this.state={
      mode:"welcome",
      selected_content_id:2,
      Subject:{title:"web", sub:"world wide web!"},
      welcome:{title:"welcome", desc:"Hello React"},
      Contents:[
        {id:1, title:'html', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ],

      // 연습
      Title:{title:'TITLE'},
      Text:[
        {id:1, text:'text 1'},
        {id:2, text:'text 2'},
        {id:3, text:'text 3'},
      ],
      time:"아침",
      meal:[
        {id:1, title:"breakfast", menu:"죽"},
        {id:2, title:"lunch", menu:"샌드위치"},
        {id:3, title:"dinner", menu:"소고기"} 
      ],
    }
  }
  getReadContent(){
    var i=0;
      while(i < this.state.Contents.length){
        var data=this.state.Contents[i];
        if(data.id === this.state.selected_content_id){
          return data;
          break;
        }
        i=i+1;
      }
  }
  getContent(){
    var _id, _title, _desc, _article,_content = null;

    if(this.state.mode === "welcome"){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}/>
    }else if(this.state.mode === "read"){
      _content=this.getReadContent();
      _article=<ReadContent title={_content.title} desc={_content.desc}/>
    }else if(this.state.mode === "create"){
      _article=<CreateContent onSubmit={function(_title, _desc){
        this.max_content_id=this.max_content_id+1;
        //state에 값을 추가 할 때는 push와 같이 original data를 변경하는 것을 사용하지 말 것
        // this.state.Contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        
        //state에 값을 추가 할 때는 concat처럼 original data를 변경하지 안고 새로운 데이터를 추가하는 것을 사용할 것
        // var _contents=this.state.Contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );

        //immutable : 원본 안고치고 state값 추가(객체) : 
        //var a={name : "~~~"}; var b=Object.assign{{}, a}; 활용할 것

        //immutable : 원본 안고치고 state 값 추가(배열)
        var newContents= Array.from(this.state.Contents);
        newContents.push({id:this.max_content_id, title:_title, desc:_desc});

        this.setState({
          Contents:newContents,
          mode :'read',
          selected_content_id:this.max_content_id,
        });
      }.bind(this)}/>
    }else if(this.state.mode === 'update'){
      _content=this.getReadContent();
      _article=<UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          var _contents = Array.from(this.state.Contents); // Contetns라는 배여을 복사한 새로은 배열이 만들어진다.
          var i=0;
          while(i <_contents.length){
            if(_contents[i].id === _id){
              _contents[i]={id:_id, title:_title, desc:_desc};
              break;
            }
            i=i+1;
          }
          this.setState({
            Contents:_contents,
            mode :'read',
          });
        }.bind(this)}/>
    }
    return _article;
  }

  render(){
    //연습
    var mealType, mealMenu=null;
    if(this.state.time ==="아침"){
      mealType=this.state.meal[0].title;
      mealMenu=this.state.meal[0].menu;
    }else if(this.state.time==="점심"){
      mealType=this.state.meal[1].title;
      mealMenu=this.state.meal[1].menu;
    }else if(this.state.time==="저녁"){
      mealType=this.state.meal[2].title;
      mealMenu=this.state.meal[2].menu;
    }

    return ( //하위 컴포넌트에서 이벤트를 통하여 상위 컴포넌트를 바꿀 수 있다.
      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}
          onChangePage={function(){ //컴포넌트에 이벤트를 생성하고 이벤트에 함수를 설치
            this.setState({ //컴포넌트가 생성된 이후 동적으로 state를 변경할 경우 setState()를 사용한다.
              mode:"welcome"
            });
          }.bind(this)}/>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:"read",
              selected_content_id:Number(id), //전달되는 id의 값이 숫자가 아니므로 Number()를 통해서 숫자로 변환한다.
            });
          }.bind(this)}
          data={this.state.Contents}/>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('정말 삭제하시겠습니까?')){ //window.confirm : 확인 누르면 true, 그렇지 않으면 false
              var _contents = Array.from(this.state.Contents);
              var i=0;
              while(i < this.state.Contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i, 1); //어디서부터 어디까지 지울 것인가
                  break;
                }
                i=i+1;
              }
              for(var j=0; j<_contents.length; j++){ //삭제로 인한 id 재설정
                _contents[j].id=j+1;
              }
              this.max_content_id=this.max_content_id-1; //삭제로 인한 max_content_id 변경
              this.setState({
                mode:'welcome',
                Contents:_contents,
              });
              alert('삭제 되었습니다.');
            }
          }else{
            this.setState({
              mode:_mode
            })
          }
          
        }.bind(this)}/>
        {this.getContent()}
        <br/>
        <div>================================(아래는 연습용)=====================================</div>
        <Practice1/>
        <Practice2 title="react component with props" subTitle="prpos 사용해보기"/>
        <Practice3 title={this.state.Title.title} contents={this.state.Text}/>
        <MealTime title={this.state.time}
          onChangePage={function(){
            if(this.state.time === "아침"){
              this.setState({
                time:"점심"
              });
            }else if(this.state.time === "점심"){
              this.setState({
                time:"저녁"
              })
            }else if(this.state.time === "저녁"){
              this.setState({
                time:"아침"
              });
            }
          }.bind(this)}/>
        <MealContent type={mealType} menu={mealMenu}/>
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
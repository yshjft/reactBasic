import React, {Component} from 'react';

class MealTime extends Component{
  render(){
    return(
      <h1>
        <a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>
          {this.props.title}
        </a>
      </h1>
    );
  }
}

export default MealTime;
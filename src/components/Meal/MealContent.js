import React, {Component} from 'react';
import './meal.css'

class MealContent extends Component{
  render(){
    return(
      <div className="mealContent">
        <h2 className="type">{this.props.type}</h2>
        <div className="menu">{this.props.menu}</div>
      </div>
    );
  }
}

export default MealContent;
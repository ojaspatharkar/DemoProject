import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from './Checkbox.js'

class CheckboxPanel extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      liked : false,
      disabled : false
    }
  }

onCheck(chk, val){

  this.setState({liked : chk});
}

allowFeedback(chk){
    this.setState({allowFeedback : chk, disabled : chk})
}

render(){

  return(
    <div style={{padding : "20px"}}>

    <div>
    <Checkbox checked={this.state.allowFeedback} onCheck={(chk)=>this.allowFeedback(chk)} style={{display : "inline-block", verticalAlign : "top"}}/>
    Allow Feedback
    </div>
    <br />
        <Checkbox checked={this.state.liked} disabled={!this.state.disabled}
        onCheck={(chk, val)=>this.onCheck(chk, val)}>
          Check if you like it
        </Checkbox>

    </div>
  );
}
}

export default CheckboxPanel;

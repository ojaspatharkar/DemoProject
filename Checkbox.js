import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"
import classNames from 'classnames'

class Checkbox extends React.Component
{
  constructor(props){
    super(props);
    this.state = {

    }
  }

shouldComponentUpdate(nextProps){
  return (this.props.checked != nextProps.checked ||
          this.props.disabled != nextProps.disabled
          )
}

onClick(){
    if(this.props.onCheck)
      this.props.onCheck(!this.props.checked, this.props.value)
}

render(){

  var checkboxClass = classNames({
    "checkbox" : true,
    "disabled" : this.props.disabled
  })

  return(
    <div style={this.props.style}>
        <div className = {checkboxClass} onClick={()=>this.onClick()}>
          {
            (this.props.checked)
            ?
             <img src="./images/check.png" height="18px" width="25px" style={{top : "-3px", position : "relative"}}/>
            :
              null
          }
        </div>
        <div style={{display : "inline-block", paddingLeft : "15px", verticalAlign : 'top'}}>{this.props.children}</div>
    </div>
  );
}
}

export default Checkbox;

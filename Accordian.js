import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
class Accordian extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
        Name : "",
        open : false
    }
  }

onPanelClick(e){
  if(e.target == this.refs.next)
    return false;
  this.setState({open : !this.state.open})
}

onNextClick(e){
  this.setState({open : false},()=>{
    if(this.props.onNext)
      this.props.onNext();
  })

}


render(){
var accordianClass = classNames({
  "accordianOpen" : this.state.open,
  "accordianClose" : false
})

  return(
    <div >
      <table className="panel" style={{border : "1px solid grey", borderRadius : '5px'}}>
        <tbody>
          <tr ref='row' style={{height : "50px", backgroundColor : "grey"}}
                      onClick={(e)=>this.onPanelClick(e)}>
            <td style={{width : "100px", fontSize : "30", paddingLeft : "5px"}}>
              Name :
            </td>
            <td style={{width : "370px", fontSize : "30"}}>
              {this.props.UserName}
            </td>
            <td>
              <img ref="next" src='./images/next.png' height="40px" width="40px" onClick={(e)=>this.onNextClick(e)} title="Next"/>
            </td>
          </tr>
          <tr >
            <td colSpan={3} className={accordianClass} style={{padding : "0px"}}>
            {
              (this.state.open)
              ?
                this.props.children
              :
                null
            }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
}

export default Accordian;

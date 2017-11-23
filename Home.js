import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component
{
  constructor(props){
    super(props);
    this.state = {

    }
  }

render(){

  return(
    <div style={{paddingTop :"20px", paddingLeft : "20px"}}>
          <h1>Welcome</h1>
    </div>
  );
}
}

export default Home;

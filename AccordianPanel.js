import React from 'react'
import ReactDOM from 'react-dom'
import Accordian from './Accordian.js'
import axios from 'axios'
import UserDetail from './UserDetail.js';
import Loader from 'react-loader'
class AccordianPanel extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      loading : false,
        UserDetail : {
                  login: "",
                  id: 0,
                  avatar_url: "h",
                  type: "",
                  site_admin: false,
                  name: "",
                  company: null,
                  blog: "",
                  location: "",
                  email: "",
                }
    }
  }

componentWillMount(){
  this.setState({loading : true},()=>{
    this.getData(1);
  })
}

onNextClick(){
  var id = this.state.UserDetail.id + 1
  if(id > 5)
    id = 1
    this.setState({loading : true},()=>{
      this.getData(id);
    });
}

  getData(id){
      axios({
      method:'get',
      url:'http://localhost:8082/'+id,
      responseType:'text/json',

      })
      .then((response)=>{
        var user = response.data
        this.setState({UserDetail : user, loading : false})
      });

  }

render(){
  if(this.state.loading)
  {
    return(<Loader />)
  }
  else {
    return(
      <div style={{paddingLeft :"20px"}}>
        <h2>User Profile</h2>
        <Accordian onNext={()=>this.onNextClick()} UserName = {this.state.UserDetail.name}>
          <UserDetail Detail={this.state.UserDetail} style={{width : "100%", height : "250px"}}/>
          </Accordian>
      </div>
    )
  }


}
}

export default AccordianPanel;

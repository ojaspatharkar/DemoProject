import React from 'react'
import ReactDOM from 'react-dom'

class UserDetail extends React.Component
{
  constructor(props){
    super(props);
    this.state = {

    }
  }


render(){

  return(
    <div style={this.props.style} style={{minWidth : "300px"}}>
      <table>
        <tbody>
          <tr rowSpan={6}>
            <td>
              <img src={this.props.Detail.avatar_url} height="230px" width = "190px" title={this.props.Detail.name}/>
            </td>
            <td style={{verticalAlign : "top", fontSize : "15px", minWidth :"300px"}}>
                <table>
                  <tbody>
                    <tr>
                        <td style={{width : "100px"}}>Login ID :</td>
                        <td>{this.props.Detail.login}</td>
                    </tr>
                    <tr>
                        <td>Email :</td>
                        <td>{this.props.Detail.email}</td>
                    </tr>
                    <tr>
                        <td>Address :</td>
                        <td>{this.props.Detail.location}</td>
                    </tr>
                    <tr>
                        <td>Company :</td>
                        <td>{this.props.Detail.company}</td>
                    </tr>
                    <tr>
                        <td>Blog :</td>
                        <td><a href={this.props.Detail.blog}>{this.props.Detail.blog}</a></td>
                    </tr>
                    <tr>
                        <td>Type :</td>
                        <td>{this.props.Detail.type}</td>
                    </tr>
                  </tbody>
                </table>
            </td>
          </tr>
          </tbody>
      </table>
    </div>
  );
}
}

export default UserDetail;

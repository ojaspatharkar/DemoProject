  import React from 'react'
  import ReactDOM from 'react-dom'
  import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import AccordianPanel from './AccordianPanel.js';
import CheckboxPanel from './CheckboxPanel.js';
import routes from './index.js'
import Home from './Home.js'
import { browserHistory } from 'react-router';
  class App extends React.Component
  {
    constructor(props){
      super(props);
      this.state = {

      }
    }

  render(){


    return(
      <div>
        <h1>Test Project</h1><br />
      <Router >
          <div>
              <li><Link className="link" to="/">Home</Link></li>
              <li><Link className="link" to="/accordian">Accordian</Link></li>
              <li><Link className="link" to="/checkbox">CheckBox</Link></li>
              <br />
              <div className="routePanel">
                  {routes}
              </div>
          </div>
      </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'))

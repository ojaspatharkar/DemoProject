import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router-dom';
import Home from './Home.js'
import AccordianPanel from './AccordianPanel.js';
import CheckboxPanel from './CheckboxPanel.js';

const routes=[
  <Route key="home" path="/" component={Home} />,
  <Route key="accordian" path="/accordian" component={AccordianPanel}/>,
  <Route key="checkbox" path="/checkbox" component={CheckboxPanel}/>
]


export default routes;

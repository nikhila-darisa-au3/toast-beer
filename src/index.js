import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home'; 
import Dashboard from './components/dashboard'
import reportWebVitals from './reportWebVitals';
import {store} from './store/store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import BeerDetails from './components/beerdetails';
class Index extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/beer/:id' component={BeerDetails}/>
      </Router>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Index /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { Component } from 'react';
import {Switch,BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Header from './Header';
import Home from './Components/Home';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading : true,
      country:{
        name:'',
        code:''
      }
    }
    this.getCountry = this.getCountry.bind(this);
  }
  getCountry(){
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(pos=>{
       const lat = pos.coords.latitude;
       const lon = pos.coords.longitude;
       const url= `https://us1.locationiq.com/v1/reverse.php?key=0244cef8afc840&lat=${lat}&lon=${lon}&format=json`;
       axios.get(url).then(resp=>resp.json()).then(position=>position.address).then(address=>{
         this.setState({
          country:{
            name :  address.country,
            code : address.country_code
          }
         });
       });
     });
    }
    else console.log("Can't get your location");
   }
   componentDidMount() {
     this.getCountry();
     
     this.setState({
      isLoading : false
     })
   }
   

  render() {
    return (
      <div className="App">
      {this.state.isLoading?'':
       <Header country={this.state.country.name}/>
     }
       <Router>
        <Route path='/home'component={Home}/>


       </Router>
    </div>
    )
  }
}


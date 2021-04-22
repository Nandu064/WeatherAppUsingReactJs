import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import React from 'react';
import axios from 'axios'
// import {Button} from 'react-bootstrap'
// import SearchModal from './components/SearchModal'
// import {useState,useEffect} from 'react'
import Weather from './components/Weather'

//Api Key
const API_key = '5d707b7518b4d11e3334636d63e601c0'


class App extends React.Component {
  // For Modal Operations
  // const [showModal, setShowModal] = useState(false);
  constructor(){
    super();
    this.state={
      city:'',
      country:'',
      temp:0,
      minTemp:0,
      maxTemp:0,
      //showModal : false,
      
    };
  }
  getWeather = async ()=>{
    // Using Fetch Method
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nandyal&appid=${API_key}`);
    // const response = await api_call.json();
    // console.log(response);
    
    // this.setState({
    //   city:response.name,
    //   country:response.sys.country
    // })
  }
  componentDidMount(){
    //Fetching Data using Async and await
    //this.getWeather();
    //Fetching using axios library
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Nandyal&appid=${API_key}`)
        .then(res=>{
          console.log(res.data)
          const data = res.data;
            this.setState({
              city:data.name,
              country:data.sys.country,
              temp:data.main.temp,
              minTemp:data.main.temp_min,
              maxTemp:data.main.temp_max
            });
        });
  }
  render(){
    return (
    <div className="App">
      <Weather
        city={this.state.city}
        country={this.state.country}
        temp={this.state.temp}
        minTemp={this.state.minTemp}
        maxTemp={this.state.maxTemp}/>
      {/* For Modal opening button */}
        {/* <div class="container">
          <input type="search" placeholder="Enter the City"/>
          <Button
            variant="success"
            onClick={()=>this.setState({showModal:true})}>Get Weather
          </Button>
        </div> */}
      {/* For Modal */}
      {/* <SearchModal
        city={this.state.city}
        country={this.state.country}
        show={this.state.showModal}
        onHide={()=>this.setState({showModal:false})}
      /> */}
    </div>
  );}
}

export default App;

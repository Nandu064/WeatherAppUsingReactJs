import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import React from 'react';
import axios from 'axios'
// import {Button} from 'react-bootstrap'
// import SearchModal from './components/SearchModal'
// import {useState,useEffect} from 'react'
import Weather from './components/Weather'
import Form from './components/Form';

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
      icon:'',
      iconId:'',
      temp:0,
      minTemp:0,
      maxTemp:0,
      description:'',
      error:false,
      //showModal : false,
    };
    this.weatherIcon = {
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }
// To convert Temperature from Kelvin to celcius
  tempConvert=(temp)=>{
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }
  //To fetch weather Icon from open weather API.
  getWeatherIcon=(icons,rangeId)=>{
    console.log(rangeId)
    switch(true){
      case rangeId >=200 && rangeId <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm})
        break;
      case rangeId >=300 && rangeId <= 321:
        this.setState({icon:this.weatherIcon.Drizzle})
        break;
      case rangeId >=500 && rangeId <= 531:
        this.setState({icon:this.weatherIcon.Rain})
        break;    
      case rangeId >=600 && rangeId <= 622:
        this.setState({icon:this.weatherIcon.Snow})
        break;
      case rangeId >=700 && rangeId <= 781:
        this.setState({icon:this.weatherIcon.Atmosphere})
        break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.Clear})
        break;
      case rangeId >=801 && rangeId <= 804:
        this.setState({icon:this.weatherIcon.Clouds})
        break;
      default:
        this.setState({icon:this.weatherIcon.Atmosphere})
    }

  }
  // Using Fetch Method
  // getWeather = async ()=>{
    
  //   // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`);
  //   // const response = await api_call.json();
  //   // console.log(response);
    
  //   // this.setState({
  //   //   city:response.name,
  //   //   country:response.sys.country
  //   // })
  // }
  componentDidMount(){
    //Fetching Data using Async and await
    //this.getWeather();
    //Fetching using axios library
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${API_key}`)
        .then(res=>{
          console.log(res.data);
          const data = res.data;
            this.setState({
              city:data.name,
              country:data.sys.country,
              temp:this.tempConvert(data.main.temp),
              minTemp:this.tempConvert(data.main.temp_min),
              maxTemp:this.tempConvert(data.main.temp_max),
              description:data.weather[0].description,
              iconId:data.weather[0].id
            });
            
            this.getWeatherIcon(this.icon,this.state.iconId);
            
          console.log(this.state.iconId)
        });
  }
  render(){
    return (
    <div className="App">
      <Form />
      <Weather
        city={this.state.city}
        country={this.state.country}
        temp={this.state.temp}
        minTemp={this.state.minTemp}
        maxTemp={this.state.maxTemp}
        description={this.state.description}
        weatherIcon={this.state.icon}/>
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

import { useState } from 'react';
import FormCity from './FormCity';
import SelectCity from './SelectCity';
import WeatherWidget from './WeatherWidget'
import './App.css';
import mapping from './json/mapping.json';

function App(){
  //console.log(mapping.weather.find(el => el.numéro === 0))
  const [responseSelect, setReponseSelect] = useState('');
  const [data, setData] = useState('NULL');
  const [disp, setDisp] = useState(false);
  const [weatherData, setWeatherData] = useState();

  const handleFormSubmit = async (response) => {
    await fetch(`https://geo.api.gouv.fr/communes?codePostal=${response}`)
    .then(response => response.json())
    .then(result => {
      setData(result);
      if(result.length>0){
        setDisp(true);
      }else{
        alert('Code Postal Inconnu !');
      }
      
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  const handleSelectSubmit = async (response) => {
    setReponseSelect(response);
    //console.log(response);
    await fetch(`https://api.meteo-concept.com/api/forecast/daily?token=496395ad7d32077205c47de016df366d1bf8cef8deff6b26e6cb7a7508ee1183&insee=${response.insee}`)
    .then(result => result.json())
    .then(result =>{
      setWeatherData({weather: result.forecast[0], city: response.city});
      //console.log(result.forecast[0]);
    });
  }

  return (
    <>
      <FormCity onFormSubmit={handleFormSubmit} />
      <SelectCity onFormSubmit={handleSelectSubmit} elements={data} disp={disp}/>
      <WeatherWidget data={weatherData}/>
    </>
    
  );
}

export default App;
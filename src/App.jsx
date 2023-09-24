import { useState } from 'react';
import FormCity from './Components/FormCity';
import SelectCity from './Components/SelectCity';
import WeatherWidget from './Components/WeatherWidget'
import './styles/App.css';
import mapping from './json/mapping.json';

function App(){
  const [resSelect, setResSelect] = useState('');
  const [resCities, setResCities] = useState('');

  return (
    <>
      <FormCity res={setResCities} />
      {resCities != '' ? <SelectCity data={resCities} res={setResSelect}/> : ""}
      {resSelect != '' ? <WeatherWidget data={resSelect}/> : ""}
    </>
    
  );
}
//<WeatherWidget data={weatherData}/>
export default App;
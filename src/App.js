import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import CardLocation from "./components/CardLocation/CardLocation"
import Cards from "./components/Cards/Cards"


function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=5a356e829671832fd6ad0994b01c7dbb`)
      .then(r => r.json())
      .then((re) => {
        if(re.main !== undefined){
          const ciudad = {
            id: re.id,
              name: re.name,
              feels_like: Math.round(re.main.feels_like),
              temp: Math.round(re.main.temp),
              min: re.main.temp_min,
              max: re.main.temp_max,
              humidity: re.main.humidity,
              weather: re.weather[0].main,
              description: re.weather[0].description,
              img: re.weather[0].icon,
              wind: re.wind.speed,
          };
          setCities(oldCities => [...oldCities, ciudad]);
          
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  const [localWeather, setLocalWeather] = useState([]);
  function log (position) {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=5a356e829671832fd6ad0994b01c7dbb`)
        .then(r => r.json())
        .then((data) => {
            const localCity = {
              id: data.id,
              name: data.name,
              feels_like: Math.round(data.main.feels_like),
              temp: Math.round(data.main.temp),
              min: data.main.temp_min,
              max: data.main.temp_max,
              humidity: data.main.humidity,
              weather: data.weather[0].main,
              description: data.weather[0].description,
              img: data.weather[0].icon,
              wind: data.wind.speed,
          
          }
          setLocalWeather(localWeather => [localCity]);
          
        })
  }
 
  const onLoad = () => {
      navigator.geolocation.getCurrentPosition(log)
      
  }

  return (
    <div onLoad={onLoad}>
      <Navbar onSearch={onSearch}/>
      <div className="containerCardsApp">
          {localWeather.map(d => <CardLocation
            key={d.id}
            name={d.name}
            temp={d.temp}
            max={d.max}
            min={d.min}
            img={d.img}
            feels_like={d.feels_like}
            humidity={d.humidity}
            weather={d.weather}
            description={d.description}
            wind={d.wind}
          /> )}
      <Cards cities={cities} onClose={onClose} />
      </div>  
    </div>
  );
}

export default App;

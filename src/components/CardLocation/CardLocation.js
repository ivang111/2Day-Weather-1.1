import React from 'react';
import './CardLocation.css';
import Clock from '../Clock';
import { MdGpsFixed } from "react-icons/md";
import image from '../../image/pngegg.png'
import { SiWindicss } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";

export default function CardLocation ({name, weather, temp, img, description, min, max, humidity, wind, id}) {
  

  

  return (
    <div key={id} className="cardContainer">
      <div className="topContainer">
        <h5 className='searchName' >< MdGpsFixed/> {name}</h5>
        <div className="Clock" ><Clock  /></div>
        <div className='imgeContainer'>
          <div className='searchTempConainer'>
            <h2 className='searchTemp' >{temp}°</h2>
            <img src={image} width="200" className="image" alt='img'/>
            <img className='serachImg' src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" /><hr/>
          </div>
          <div  className='windConteiner'>
            <SiWindicss className='iconWind' />
            <p className='searchWind'>{wind}m/s</p>
            <p className='windTitle'>Wind</p>
          </div>
          <div className='center'>
            <p  className='dataDescription'>{description}</p>
          </div>
        </div>
        <div className='bottonContainer'>
            <div className='containerMax'>
              <p className='valuesData' >{max}℃</p>
              <p className='valueNameData'>Max</p>
            </div>
            <div className='containerMin'>
              <p className='valuesData' >{min}℃</p>
              <p className='valueNameData'>Min</p>
            </div>
            <div className='containerhumidity'>
              <WiHumidity className='humIco' />
              <p className='valuesDatah'>{humidity}%</p>
              <p className='valueNameDatah'>Humidity</p>
            </div>
        </div>
      </div>
    </div>
);
};
            
       
       
     
      
 

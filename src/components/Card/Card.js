import React from 'react';
import './Card.css';
import { MdOutlinePlace, MdCancel } from "react-icons/md";

export default function Card ({name, weather, temp, img, description, min, max, humidity, wind, onClose, id}) {
    
  return (
    <div key={id} className="container">
          <div className='localCard'>
          <button onClick={onClose} ><MdCancel className="buttonClose"/></button>
           <div>
             <p className='weather'>{weather}</p>
             <h5 className='name' >< MdOutlinePlace /> {name}</h5>
           </div>
           <div className='imgCoantainer' >
             <div className='conteinerTemp'>
              <h2 className='temph1' >{temp}°</h2>
             </div>
             <img className='iconWeather' src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
           </div>
           <p className='description'>{description}</p>
           <p className='data'>Wind: {wind}m/s</p>
                 
           <div className='containerButtom'>
             <div className='dataContainer'>
               <p className='data' >{max}℃</p>
               <p className='dataVaule'>Max</p>
             </div>
             <div className='dataContainer'>
               <p className='data' >{min}℃</p>
               <p className='dataVaule'>Min</p>
             </div>
             <div className='dataContainer no-border'>
               <p className='data'>{humidity}%</p>
               <p className='dataVaule'>Humidity</p>
             </div>
             
           </div>
          </div>
        </div>
    );
};

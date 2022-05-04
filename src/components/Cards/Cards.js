import React from 'react';
import './Cards.css';

import Card from '../Card/Card';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
           key={c.id}
           name={c.name}
           temp={c.temp}
           max={c.max}
           min={c.min}
           img={c.img}
           feels_like={c.feels_like}
           humidity={c.humidity}
           weather={c.weather}
           description={c.description}
           wind={c.wind}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}

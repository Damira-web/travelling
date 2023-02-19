import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [place, setPlace] = useState(0);
  const {id, country, city, description, image} = data[place];

  const previousPlace = () => {
    setPlace ((place => {
      place --;
      if (place < 0) {
        return data.length -1;
      }
      return place;
    }))
  }

  const nextPlace = () => {
    setPlace ((place => {
      place ++;
      if (place > data.length -1) {
        place = 0;
      }
      return place;
    }))
  }

  return (
    <div>

      <div className='container'>
        <img src={image} width='500px' alt='place'/>
      </div>

      <div className='container'>
        <h1>{id} - {country}, {city}</h1>
      </div>

      <div className='container'>
        <p>{description}</p>
      </div>

      <div className='container btn'>
        <button onClick={previousPlace}>Previous</button>
        <button onClick={nextPlace}>Next</button>
      </div>

    </div>
  );
}

export default App;

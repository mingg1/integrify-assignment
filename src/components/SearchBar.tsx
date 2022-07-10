import React, { FormEvent, useState } from 'react';
import { useWeatherInfo } from '../context/WeatherInfoContext';
import { CITY_ENDPOINT } from '../utils/consts';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { searchCityForecast } = useWeatherInfo();

  const getWeatherByCityName = (evt: FormEvent) => {
    evt.preventDefault();

    if (city === '') return alert('Write a city name first!');

    const searchUrl = `${CITY_ENDPOINT}/search?apikey=${process.env.REACT_APP_API_KEY}&q=${city}`;
    searchCityForecast(searchUrl);
    setCity('');
  };

  return (
    <form onSubmit={getWeatherByCityName}>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Enter city name here"
        value={city || ''}
        onChange={(evt) => setCity(evt.target.value)}
      />
      <button>Get weather info</button>
    </form>
  );
};

export default SearchBar;

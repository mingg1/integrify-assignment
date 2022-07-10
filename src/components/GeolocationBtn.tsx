import React from 'react';
import { useWeatherInfo } from '../context/WeatherInfoContext';
import { CITY_ENDPOINT } from '../utils/consts';

const GeolocationBtn = () => {
  const { searchCityForecast } = useWeatherInfo();
  const getLocation = () => {
    const onGeoSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      const geoUrl = `${CITY_ENDPOINT}/geoposition/search?apikey=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}`;
      //api call
      searchCityForecast(geoUrl);
    };

    const onGeoError = (err: GeolocationPositionError) => {
      console.log(err.message);
    };

    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  };

  return <button onClick={getLocation}>Get current location's weather</button>;
};

export default GeolocationBtn;

import React from 'react';

interface WeatherTitleProps {
  city: string;
  area: string;
  country: string;
}

const WeatherTitle = ({ city, area, country }: WeatherTitleProps) => {
  return (
    <div className="weather-title-container">
      <div className="city-area-container">
        <h2 className="city">{city}</h2>
        <h3 className="area">{area}</h3>
      </div>
      <h3 className="country">{country}</h3>
    </div>
  );
};

export default WeatherTitle;

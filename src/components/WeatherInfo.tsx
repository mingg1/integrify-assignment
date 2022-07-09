import React from 'react';

interface WeatherInfoProps {
  weather: string | undefined;
}

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  return (
    <section>
      <h2>{/*city name*/}</h2>
      <h3>{/*country name*/}</h3>
      <figure>
        <img />
      </figure>
      <h3>{/*description*/}</h3>
      <div>{/* min & max tempratures */}</div>
      <div>{/* day & night */}</div>
    </section>
  );
};

export default WeatherInfo;

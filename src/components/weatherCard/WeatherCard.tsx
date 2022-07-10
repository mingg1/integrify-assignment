import React from 'react';
import { DailyForecast } from '../../utils/weatherAPIHelper';
import ForecastDescriptionItem from './ForecastDescription';
import Temprature from './Temprature';
import WeatherTitle from './WeatherTitle';

interface WeatherCardProps {
  info: DailyForecast;
}

const WeatherCard = ({ info }: WeatherCardProps) => {
  return (
    <li className="weather-card">
      <WeatherTitle city={info.city} area={info.area} country={info.country} />
      <div className="temprature-container">
        <Temprature temprature={info.minTemprature} tempValue="Minimum" />
        <Temprature temprature={info.maxTemprature} tempValue="Maximum" />
      </div>
      <div className="forecast-container">
        <ForecastDescriptionItem data={info.dayForecast} time="Day" />
        <ForecastDescriptionItem data={info.nightForecast} time="Night" />
      </div>
    </li>
  );
};

export default WeatherCard;

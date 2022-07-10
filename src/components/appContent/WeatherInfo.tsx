import React from 'react';
import { useWeatherInfo } from '../../context/WeatherInfoContext';
import WeatherCard from '../weatherCard/WeatherCard';

const WeatherInfo = () => {
  const { dailyForecasts, errorMsg, loading } = useWeatherInfo();
  return loading ? (
    <h3 className="loading-message">Loading...</h3>
  ) : (
    <section>
      {errorMsg ? (
        <p className="error-message">{errorMsg}</p>
      ) : (
        dailyForecasts.length !== 0 && (
          <>
            <p className="result">result: ({dailyForecasts.length})</p>
            <ul>
              {dailyForecasts.map((info, index) => (
                <WeatherCard key={index} info={info} />
              ))}
            </ul>
          </>
        )
      )}
    </section>
  );
};

export default WeatherInfo;

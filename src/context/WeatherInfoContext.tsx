import { createContext, ReactNode, useContext, useState } from 'react';
import {
  DailyForecast,
  fetchUrl,
  getDailyForecast,
} from '../utils/weatherAPIHelper';

interface WeatherInfoContextProviderProps {
  children: ReactNode;
}

interface WeatherInfoContext {
  errorMsg: string | null;
  loading: boolean;
  searchCityForecast: (url: string) => void;
  dailyForecasts: DailyForecast[];
}

export const weatherInfoContext = createContext({} as WeatherInfoContext);

export const useWeatherInfo = () => useContext(weatherInfoContext);

export const WeatherInfoContextProvider = ({
  children,
}: WeatherInfoContextProviderProps) => {
  const [dailyForecasts, setDailyForecasts] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const searchCityForecast = async (url: string) => {
    setLoading(true);

    try {
      if (dailyForecasts.length !== 0) setDailyForecasts([]);

      const resCity = await fetchUrl(url);

      if (Array.isArray(resCity)) {
        if (resCity.length === 0) {
          return setErrorMsg('No result found');
        }

        resCity.forEach(async (city) => {
          const forecastData = await getDailyForecast(city);
          setDailyForecasts(
            (cityWeatherForecasts) =>
              [...cityWeatherForecasts, forecastData] as DailyForecast[]
          );
        });
        setErrorMsg(null);
        return;
      }
      setDailyForecasts([await getDailyForecast(resCity)] as DailyForecast[]);
    } catch (error: any) {
      setErrorMsg('Something went wrong! Check your network x-(');
    } finally {
      setLoading(false);
    }
  };

  return (
    <weatherInfoContext.Provider
      value={{
        dailyForecasts,
        searchCityForecast,
        errorMsg,
        loading,
      }}
    >
      {children}
    </weatherInfoContext.Provider>
  );
};

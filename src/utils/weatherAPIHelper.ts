import { FORECAST_ENDPOINT } from './consts';

interface CityInfo {
  locationKey?: number;
  city: string;
  country: string;
  area: string;
}

export interface ForecastDescription {
  iconKey: number;
  iconPhrase: string;
  precipitationType?: string;
  precipitationIntensity?: string;
}

export interface DailyForecast extends CityInfo {
  minTemprature: number;
  maxTemprature: number;
  dayForecast: ForecastDescription;
  nightForecast: ForecastDescription;
}

export const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  const resJson = await response.json();
  return resJson;
};

export const getCityData = (data: any): CityInfo => {
  const locationKey = data['Key'];
  const city: string = data['EnglishName'];
  const country: string = data['AdministrativeArea']['CountryID'];
  const area: string = data['AdministrativeArea']['EnglishName'];

  return { locationKey, city, country, area };
};

export const getForecastDescription = (info: any): ForecastDescription => ({
  iconKey: info['Icon'] as number,
  iconPhrase: info['IconPhrase'] as string,
  precipitationType: info['PrecipitationType'],
  precipitationIntensity: info['PrecipitationIntensity'],
});

export const getLocationForecastData = async (locationKey: number) => {
  const weatherInfo = await fetchUrl(
    `${FORECAST_ENDPOINT}/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
  );

  const dailyForecast = weatherInfo['DailyForecasts'][0];
  const tempratures = dailyForecast['Temperature'];
  const minTemprature = tempratures['Minimum']['Value'] as number;
  const maxTemprature = tempratures['Maximum']['Value'] as number;
  const dayInfo = dailyForecast['Day'];
  const nightInfo = dailyForecast['Night'];

  return {
    minTemprature,
    maxTemprature,
    dayForecast: getForecastDescription(dayInfo),
    nightForecast: getForecastDescription(nightInfo),
  };
};

export const getDailyForecast = async (city: any): Promise<DailyForecast> => {
  const cityData = getCityData(city);
  const forecast = await getLocationForecastData(
    cityData.locationKey as number
  );
  return { ...forecast, ...cityData };
};

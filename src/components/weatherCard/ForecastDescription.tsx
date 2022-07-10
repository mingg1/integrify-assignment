import React from 'react';
import { ICON_URL } from '../../utils/consts';
import { ForecastDescription } from '../../utils/weatherAPIHelper';

interface ForecastDescriptionItemProps {
  data: ForecastDescription;
  time: string;
}

const ForecastDescriptionItem = ({
  data,
  time,
}: ForecastDescriptionItemProps) => {
  return (
    <div className="forecast-item">
      <h5 className="forecast-item-title">{time}</h5>
      <figure>
        <img
          className="weather-icon"
          src={`${ICON_URL}/${data.iconKey}.svg`}
          alt={data.iconPhrase}
        />
        <figcaption>{data.iconPhrase}</figcaption>
      </figure>
      {data.precipitationIntensity && (
        <p className="precification">
          Precipitation intensity:{' '}
          <strong>{data.precipitationIntensity}</strong>
        </p>
      )}
    </div>
  );
};

export default ForecastDescriptionItem;

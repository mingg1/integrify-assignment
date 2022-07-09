import React from 'react';

const GeolocationBtn = () => {
  const getLocation = () => {
    const onGeoSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      //api call
    };

    const onGeoError = (err: GeolocationPositionError) => {
      console.log(err.message);
    };

    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  };

  return <button onClick={getLocation}>Get current location's weather</button>;
};

export default GeolocationBtn;

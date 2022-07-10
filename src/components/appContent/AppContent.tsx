import React from 'react';
import AppTitle from './AppTitle';
import GeolocationBtn from './GeolocationBtn';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';

const AppContent = () => {
  return (
    <main className="container">
      <AppTitle />
      <section className="search-container">
        <SearchBar />
        <GeolocationBtn />
      </section>
      <WeatherInfo />
    </main>
  );
};

export default AppContent;

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import AppTitle from './components/AppTitle';
import GeolocationBtn from './components/GeolocationBtn';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);
  return (
    <main>
      <section>
        <AppTitle />
        <SearchBar />
        <GeolocationBtn />
      </section>
      <section>
        {loading && <h4>Loading...</h4>}
        <WeatherInfo weather={weather} />
      </section>
    </main>
  );
}

export default App;

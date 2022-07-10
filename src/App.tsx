import React from 'react';
import { WeatherInfoContextProvider } from './context/WeatherInfoContext';
import AppContent from './components/AppContent';

function App() {
  return (
    <WeatherInfoContextProvider>
      <AppContent />
    </WeatherInfoContextProvider>
  );
}

export default App;

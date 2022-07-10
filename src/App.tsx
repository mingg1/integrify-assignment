import React from 'react';
import { WeatherInfoContextProvider } from './context/WeatherInfoContext';
import AppContent from './components/appContent/AppContent';
import './styles/reset.css';
import './styles/app.css';

function App() {
  return (
    <WeatherInfoContextProvider>
      <AppContent />
    </WeatherInfoContextProvider>
  );
}

export default App;

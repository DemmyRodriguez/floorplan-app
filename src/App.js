import React from 'react';
import './App.css';
import Baths from './components/Baths';
import Bedrooms from './components/Bedrooms';
import Kitchen from './components/Kitchen';
import LivingRoom from './components/LivingRoom';

function App() {
  return (
    <div className="App">
      <Bedrooms title="Bedroom 1" />      
      <Baths title="Full Bath" />
      <LivingRoom title="Living Room" />      
      <Bedrooms title="Bedroom 2" />
      <Kitchen title="Kitchen" />      
      <Bedrooms title="Bedroom 3" />
      <Baths title="Half Bath" />

    </div>
  );
}

export default App;

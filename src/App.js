import './App.css';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import CountryDays from './components/CountryInfo/CountryDays/CountryDays';
import { useState } from 'react';

function App() {
  const [showMap, setShowMap] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [dayInfo, setDayInfo] = useState([]);

  // const showMapHandler = () => {
  //   setShowMap(false);
  // }

  const showDaysHandler = async (event) => {
    const countryId = `${event.target.id}`;
    const countryInfo = await fetch(
      `https://date.nager.at/api/v3/publicholidays/2022/${countryId}`
    );
    const countryInfoJson = await countryInfo.json();
    setDayInfo(countryInfoJson);

    setShowMap(false);
    setShowDays(true);
  };

  return (
    <div className="App">
      <Navbar />
      {showMap && <Map onShowDays={showDaysHandler}/>}
      {showDays && <CountryDays onDayInfo={dayInfo}/>}
    </div>
  );
}

export default App;

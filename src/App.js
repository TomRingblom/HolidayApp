import './App.css';
import { useState } from 'react';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import CountryHolidaysList from './components/CountryInfo/CountryHolidays/CountryHolidaysList';
import SavedDays from './components/User/SavedDays';

function App() {
  const [showMap, setShowMap] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [dayInfo, setDayInfo] = useState([]);
  const [savedDays, setSavedDays] = useState(false);

  const showDaysHandler = async (event) => {
    try {
      const countryId = event.target.id;
      const countryInfo = await fetch(`https://date.nager.at/api/v3/publicholidays/2022/${countryId}`);

      if (!countryInfo.ok) {
        throw new Error('Country is not yet implemented in the API.');
    }
      const countryInfoJson = await countryInfo.json();
      setDayInfo(countryInfoJson);

      setShowMap(false);   
      setShowDays(true);  
      setSavedDays(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const savedDaysHandler = () => {
    setShowMap(false);
    setShowDays(false);
    setSavedDays(true);
  }

  return (
    <div className="App">
      <Navbar onSaveDays={savedDaysHandler}/>
      {showMap && <Map onShowDays={showDaysHandler}/>}
      {showDays && <CountryHolidaysList onDayInfo={dayInfo}/>}
      {savedDays && <SavedDays />}
    </div>
  );
}

export default App;

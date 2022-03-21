import './App.css';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import CountryHolidaysList from './components/CountryInfo/CountryHolidays/CountryHolidaysList';
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
    if (!countryInfo.ok) {
      throw new Error('Something went wrong!!!!');
    }
    
    
    try {
      const countryInfoJson = await countryInfo.json();
      setDayInfo(countryInfoJson);

      setShowMap(false);   
      setShowDays(true);  
    } catch (error) {
      if(countryInfo.status === 404){
        console.log(error.message);
      }
      else
      console.log("Country is not yet implemented in the API.")
      
    }
    
  };

  return (
    <div className="App">
      <Navbar />
      {showMap && <Map onShowDays={showDaysHandler}/>}
      {showDays && <CountryHolidaysList onDayInfo={dayInfo}/>}
    </div>
  );
}

export default App;

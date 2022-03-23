import './App.css';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import CountryHolidaysList from './components/CountryInfo/CountryHolidays/CountryHolidaysList';
import { useState } from 'react';
import SavedDays from './components/User/SavedDays';

function App() {
  const [showMap, setShowMap] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [dayInfo, setDayInfo] = useState([]);
  const [savedDays, setSavedDays] = useState(false);
  const [days,setDay] = useState([]);


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
      setSavedDays(false);
    } catch (error) {
      if(countryInfo.status === 404){
        console.log(error.message);
      }
      else
      console.log("Country is not yet implemented in the API.")
      
    }
    
  };

  const savedDaysHandler = () => {
    const daysInLocal = JSON.stringify(localStorage);
    const daysAsJson = JSON.parse(daysInLocal);

    const array = [];

    for (let i of Object.keys(daysAsJson)) {
      const day = JSON.parse(daysAsJson[i]);
      const arrayItem = {id: i, name: day.name, date: day.date }
      array.push(arrayItem);
    }

    console.log(array);

    setDay(array);
    setShowMap(false);
    setShowDays(false);
    setSavedDays(true); 
    
  }

  return (
    <div className="App">
      <Navbar onSaveDays={savedDaysHandler}/>
      
      {showMap && <Map onShowDays={showDaysHandler}/>}
      {showDays && <CountryHolidaysList onDayInfo={dayInfo}/>}
      {savedDays && <SavedDays reloadList={savedDaysHandler} onSaveDays={days}/>}


    </div>
  );
}

export default App;

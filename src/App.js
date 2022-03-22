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
    const notesAsJSON = JSON.parse(daysInLocal);

    const array = [];

    for (let i of Object.keys(notesAsJSON)) {
        const arrayItem = {id: i , info: notesAsJSON[i]}
        const alex = JSON.parse(notesAsJSON[i]);
        console.log(alex.name);
      array.push(arrayItem);
    }

    setDay(array);

    

    setShowMap(false);
    setShowDays(false);
    setSavedDays(true);

    // console.log(array);
    // console.log("Hej" + notesAsJSON);

  }

  return (
    <div className="App">
      <Navbar onSaveDays={savedDaysHandler}/>
      
      {showMap && <Map onShowDays={showDaysHandler}/>}
      {showDays && <CountryHolidaysList onDayInfo={dayInfo}/>}
      {savedDays && <SavedDays onSaveDays={days}/>}


    </div>
  );
}

export default App;

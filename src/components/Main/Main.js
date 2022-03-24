import '../../App.css';
import { Fragment, useState } from 'react';
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import CountryHolidaysList from '../CountryInfo/CountryHolidays/CountryHolidaysList';
import SavedDays from '../User/SavedDays';

const Main = () => {
  const [showMap, setShowMap] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [dayInfo, setDayInfo] = useState([]);
  const [showSavedDays, setShowSavedDays] = useState(false);

  const showDaysHandler = async (event) => {
    try {
      const countryId = event.target.id;
      const countryReq = await fetch(
        `https://date.nager.at/api/v3/publicholidays/2022/${countryId}`
      );
      const countryRes = await countryReq.json();

      if (!countryReq.ok) {
        throw new Error("Country is not yet implemented in the API.");
      }

      setDayInfo(countryRes);

      setShowMap(false);
      setShowDays(true);
      setShowSavedDays(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showSavedDaysHandler = () => {
    setShowMap(false);
    setShowDays(false);
    setShowSavedDays(true);
  };

  return (
    <Fragment>
      <Navbar onSaveDays={showSavedDaysHandler} />
      {showMap && <Map onShowDays={showDaysHandler} />}
      {showDays && <CountryHolidaysList onDayInfo={dayInfo} />}
      {showSavedDays && <SavedDays />}
    </Fragment>
  );
};

export default Main;
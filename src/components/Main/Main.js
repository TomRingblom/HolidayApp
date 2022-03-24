import '../../App.css';
import { Fragment, useState } from 'react';
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import CountryHolidaysList from '../CountryInfo/CountryHolidays/CountryHolidaysList';
import SavedDays from '../User/SavedDays';
import useHttp from '../hooks/use-http';

const Main = () => {
  const [showMap, setShowMap] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [dayInfo, setDayInfo] = useState([]);
  const [showSavedDays, setShowSavedDays] = useState(false);
  
  const resFunction = (obj) => {
    setDayInfo(obj);
  }

  const { getRequest: getCountryById } = useHttp(`https://date.nager.at/api/v3/publicholidays/2022/`, resFunction);

  const showDaysHandler = async (event) => {
    getCountryById(event.target.id);
    setShowMap(false);
    setShowDays(true);
    setShowSavedDays(false);
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
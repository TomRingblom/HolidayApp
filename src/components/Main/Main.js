import '../../App.css';
import { Fragment, useCallback, useState } from 'react';
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import CountryHolidaysList from '../CountryInfo/CountryHolidays/CountryHolidaysList';
import SavedDays from '../User/SavedDays';
import useHttp from '../hooks/use-http';
import SearchCountry from "../Search/Search";
const Main = () => {
  const [showMap, setShowMap] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [dayInfo, setDayInfo] = useState([]);
  const [showSavedDays, setShowSavedDays] = useState(false);
  const[showCountrySearch, setShowCountrySearch] = useState(false);
  const resFunction = useCallback((obj) => {
    setDayInfo(obj);
  },[]);

  const { getRequest: getCountryById } = useHttp(resFunction);

  const showDaysHandler = async (event) => {
    setDayInfo([]);
    if(event.target.id !== "") {
        getCountryById({url: `https://date.nager.at/api/v3/publicholidays/2022/${event.target.id}`, msg: 'Country is not yet implemented in the API.'});
        setShowMap(false);
        setShowDays(true);
        setShowCountrySearch(false);
        setShowSavedDays(false);
    }
  };
const showCountryHandler = () =>{
  setShowMap(false);
  setShowDays(false);
  setShowSavedDays(false);
  setShowCountrySearch(true);
};
  const showSavedDaysHandler = () => {
    setShowMap(false);
    setShowDays(false);
    setShowCountrySearch(false);
    setShowSavedDays(true);
  };

  const showMapHandler = () => {
    setShowMap(true);
    setShowDays(false);
    setShowCountrySearch(false);
    setShowSavedDays(false);
  };

  return (
    <Fragment>
      <Navbar onSaveDays={showSavedDaysHandler} onCountrySearch={showCountryHandler} onShowMap={showMapHandler} />
      {showMap && dayInfo && <Map onShowDays={showDaysHandler} />}
      {showDays && <CountryHolidaysList onDayInfo={dayInfo} />}     
      {showSavedDays && <SavedDays />}
      {showCountrySearch && <SearchCountry onShowDays={showDaysHandler} />}
    </Fragment>
  );
};

export default Main;
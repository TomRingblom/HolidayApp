import '../../App.css';
import { Fragment, useCallback, useState } from 'react';
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import CountryHolidaysList from '../CountryInfo/CountryHolidays/CountryHolidaysList';
import SavedDays from '../User/SavedDays';
import useHttp from '../hooks/use-http';
import useShowPages from '../hooks/use-showpages'
import SearchCountry from "../Search/Search";

const Main = () => {
  const [dayInfo, setDayInfo] = useState([]);

  const resFunction = useCallback((obj) => {
    setDayInfo(obj);
  }, []);

  const { getRequest: getCountryById } = useHttp(resFunction);
  const { showMap, showDays, showSavedDays, showCountrySearch, setPages } = useShowPages();

  const showDaysHandler = async (event) => {
    setDayInfo([]);
    if (event.target.id !== "") {
      getCountryById({
        url: `https://date.nager.at/api/v3/publicholidays/2022/${event.target.id}`,
        msg: "Country is not yet implemented in the API.",
      });
      setPages("showDays");
    }
  };

  const showCountryHandler = () => {
    setPages("showCountrySearch");
  };

  const showSavedDaysHandler = () => {
    setPages("showSavedDays");
  };

  const showMapHandler = () => {
    setPages("showMap");
  };

  return (
    <Fragment>
      <Navbar
        onSaveDays={showSavedDaysHandler}
        onCountrySearch={showCountryHandler}
        onShowMap={showMapHandler}
      />
      {showMap && dayInfo && <Map onShowDays={showDaysHandler} />}
      {showDays && <CountryHolidaysList onDayInfo={dayInfo} />}
      {showSavedDays && <SavedDays />}
      {showCountrySearch && <SearchCountry onShowDays={showDaysHandler} />}
    </Fragment>
  );
};

export default Main;
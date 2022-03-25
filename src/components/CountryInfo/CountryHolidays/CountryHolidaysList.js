import "./CountryHolydaysList.css";
import Card from "../../UI/Card";
import CountryHoliday from "./CountryHoliday";

const CountryHolidaysList = (props) => { 
  return (
    
    <Card>
      {props.onDayInfo.length === 0 ? <span> This Countries Holidays are not yet implemented in the API</span> : 
      props.onDayInfo.map((day) => (              
        <CountryHoliday key={day.date} name={day.localName} date={day.date} />
      ))}      
    </Card>
  );
} 

export default CountryHolidaysList;

import "./CountryHolydaysList.css";
import Card from "../../UI/Card";
import CountryHoliday from "./CountryHoliday";

const CountryHolidaysList = (props) => {
  return (
    <Card>
      {props.onDayInfo.map((day) => (
        <CountryHoliday key={day.localName} name={day.localName} date={day.date} />
      ))}
      
    </Card>
  );
} 

export default CountryHolidaysList;

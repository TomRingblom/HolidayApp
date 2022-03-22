import "./CountryHolydaysList.css";
import Card from "../../UI/Card";
import CountryHoliday from "./CountryHoliday";

const CountryHolidaysList = (props) => {

  // console.log(props.onDayInfo);
  return (
    <Card>
      {props.onDayInfo.map((day) => (
        <CountryHoliday key={day.localName} name={day.localName} date={day.date} />
        // <div key={days.date}>{days.localName}</div>
      ))}
      
    </Card>
  );
} 

export default CountryHolidaysList;

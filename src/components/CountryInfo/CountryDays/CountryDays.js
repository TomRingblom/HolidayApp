import "./CountryDays.css";

export default function CountryDays(props) {
    // console.log(props.onDayInfo);
  return (
    <div className="days">
      {props.onDayInfo.map((days) => (
        <div key={days.date}>{days.localName}</div>
      ))}
    </div>
  );
};

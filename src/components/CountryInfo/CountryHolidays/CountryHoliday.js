import "./CountryHoliday.css"

const CountryHoliday = (props) => {
  console.log(props);
  return (
    <div className="item">
      <h1 className="header">{props.name}</h1>
      <span className="info">{props.date}</span>
    </div>
  );
};

export default CountryHoliday;
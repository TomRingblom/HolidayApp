import "./CountryHoliday.css"

const CountryHoliday = (props) => {

  const saveDay = () => {
    console.log(props);
    const key = Math.random().toString();
    const infoObject = {
      name: props.name,
      date: props.date
    }
    localStorage.setItem(key, JSON.stringify(infoObject));
    
  }

  console.log(props);

  return (
    <div className="item">
      <h1 className="header">{props.name}</h1>
      <span className="info">{props.date}</span>
      <button className="btn-add-holiday" onClick={saveDay}>Add</button>
    </div>
  );
};

export default CountryHoliday;
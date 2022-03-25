import "./CountryHoliday.css"
import { VscAdd } from "react-icons/vsc"

const CountryHoliday = (props) => {

  const saveDay = () => {
    const key = Math.random().toString();
    const infoObject = {
      name: props.name,
      date: props.date
    }
    localStorage.setItem(key, JSON.stringify(infoObject));
  }

  return (
    <div className="item">
      <h1 className="header">{props.name}</h1>
      <div>
        <span className="info">{props.date}</span>
        <button className="btn-add-holiday" onClick={saveDay}>➕</button>
      </div>
    </div>
  );
};
export default CountryHoliday;
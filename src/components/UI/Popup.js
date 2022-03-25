import "./Popup.css"

const Popup = (props) => {
    //console.log(Object.entries(Object.entries(props.countryImage.currencies)[0][1])[0][1])
    return (
        <div className="popup">
            <div className="flagText" id="countryName" > {props.countryImage.name}</div>
            <img className="flag" src={props.countryImage.flag} alt=""/>
            <div className="flagText" >🌆 {props.countryImage.capital}</div>
            <div className="flagText" >👫 {props.countryImage.population}</div>
            <div className="flagText" >💰 {props.countryImage.currencies}</div>
        </div>
    );
};

export default Popup;
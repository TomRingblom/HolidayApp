import "./Popup.css"

const Popup = (props) => {
    return <div className="popup">
        <img className="flag" src={props.countryImage}/>
    </div>
};

export default Popup;
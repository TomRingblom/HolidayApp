import "./SavedDays.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const SavedDays = () => {
    const [savedDays, setSavedDays] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    
    const removeDay = (event) => {
        localStorage.removeItem(event.target.value);
        setUpdateList(true);
    };

    useEffect(() => {
        const daysInLocal = JSON.stringify(localStorage);
        const daysAsJson = JSON.parse(daysInLocal);
        const array = []

        for (let i of Object.keys(daysAsJson)) {
          const day = JSON.parse(daysAsJson[i]);
          const arrayItem = { id: i, name: day.name, date: day.date };
          array.push(arrayItem);
        }
        setSavedDays(array);
        setUpdateList(false);
    }, [updateList])
    
    return (
        <Card>
            {savedDays.map((props) => (
                <div className="item" key={props.id}>
                    <h1 className="header">{props.name}</h1>
                    <div>
                        <span className="info">{props.date}</span>
                        <button className="btn-add-holiday" value={props.id} onClick={removeDay}>➖</button>
                    </div>
                </div>
            ))}
        </Card>
    )
}

export default SavedDays;
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
        <ul>
            {savedDays.map((x) => (
                <div className="divSaveDay" key={x.id}>{x.name} {x.date} <button value={x.id} onClick={removeDay}>REMOVE</button></div>
            ))}
        </ul>
        </Card>
    )
}

export default SavedDays;
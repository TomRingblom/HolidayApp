import "./SavedDays.css";
import Card from "../UI/Card";
import { useCallback, useEffect, useState } from "react";




const SavedDays = (props) => {
    
    //const[update, setUpdate] = useState()
    //useEffect(() => {},[update]);
    const removeDay = (event) => {
        
        localStorage.removeItem(event.target.value)            
        props.reloadList();
        console.log("adadsda");
    };
    
    return (
        <Card>
        <ul>
            {props.onSaveDays.map((x) => (
                <div className="divSaveDay" key={x.id}>{x.name} {x.date} <button value={x.id} onClick={removeDay}>REMOVE</button></div>
            ))}
        </ul>
        </Card>
    )
}


export default SavedDays;
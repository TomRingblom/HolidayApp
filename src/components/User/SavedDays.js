import "./SavedDays.css";
import Card from "../UI/Card";



const SavedDays = (props) => {
    return (
        <Card>
        <ul>
            {props.onSaveDays.map((x) => (
                <div className="divSaveDay" key={x.id}>{x.name} {x.date}</div>
            ))}
        </ul>
        </Card>
    )
}


export default SavedDays;
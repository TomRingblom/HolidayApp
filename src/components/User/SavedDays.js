import "./SavedDays.css"
import Card from "./../UI/Card";



const SavedDays = (props) => {
    // console.log(props.onSaveDays);
    // const test = JSON.parse(props.onSaveDays[0].info);
    // console.log(test);

    return (
        <>
        <ul>
            {props.onSaveDays.map((x) => (
                <div className="divSaveDay">{x.info}</div>
            ))}
        </ul>
        </>
    )
}


export default SavedDays;
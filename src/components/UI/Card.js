import "./Card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="main">{props.children}</div>
    </div>
  );
};

export default Card;
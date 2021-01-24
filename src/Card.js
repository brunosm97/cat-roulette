import "./Card.css"
const Card = (props) => {
    console.log(props)
    return (
        <div className={props.children === "Sim" ? "card verde" : "card"}>
            {props.children}
        </div>
    )
}

export default Card
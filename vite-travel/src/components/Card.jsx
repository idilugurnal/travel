import "../style.css"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--info">
                <img src="../images/location.png" className="card--icon_location" />
                <span>{props.location}</span>
                <span className="gray">(<a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>) • </span>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

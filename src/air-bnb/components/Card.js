export default function Card(props) {

    const img = "../assets/" + props.img
    return (
        <section className="card">
            <img className="card--ahtelete" src={`../assets/${props.img}`}></img>
            <div><img className="card--star" src="../assets/Star.svg"></img><span> {props.rating} </span><span className="card-text-light">({props.reviewCount}) • {props.country}</span></div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </section>
    )
}
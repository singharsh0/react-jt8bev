import '../index.css';

export default function Card(props) {
    const openSpotsText = props.item.openSpots ? 'ONLINE' : 'SOLD OUT';
    return (
        <section className="card">
            <div className='card--badge'>{openSpotsText}</div>
            <img className="card--ahtelete" src={`../assets/${props.item.coverImg}`}></img>
            <div className="card--stats"> <img className="card--star" src="../assets/Star.svg"></img> <span> {props.item.stats.rating} </span> <span className="card-text-light"> ({props.item.stats.reviewCount}) • {props.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p><b>From ${props.item.price}</b> / person</p>
        </section>
    )
}
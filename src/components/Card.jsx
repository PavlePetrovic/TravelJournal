import pin from '../images/pin.png';

function Card(props){
    return(
        <div>
            <div className="cardDiv">
                <div className='photoDiv'>
                    <img src={props.data.imageUrl} className="cardDivImg" alt="card-img" />
                </div>
                <div className='textDiv'>
                    <div className="cardLocationDiv">
                        <img src={pin} alt="ping-img" />
                        <p>{props.data.location} <a href={props.data.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <h1 className='cardTitle'>{props.data.title}</h1>
                    <p className='cardDate'>{props.data.startDate} - {props.data.endDate}</p>
                    <p className='cardDescription'>{props.data.description}</p>
                </div>
            </div>
            {!props.last && <div className='lineDiv'></div>}
        </div>
    )
}

export default Card
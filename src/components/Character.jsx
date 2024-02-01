import './character-gallery.css';

function Character(props) {
    return ( <div>
        <h2>{props.name}</h2>
        <p>{props.height}</p>
        <p>{props.race}</p>
        <p>{props.gender}</p>
        <p>{props.birth}</p>
        <p>{props.spouse}</p>
        <p>{props.hair}</p>
        <p>{props.realm}</p>
        <p>{props.death}</p>
        <div className="img-wrapper">
        <img src={props.imgUrl} alt="" />
        </div>
    </div> );
}

export default Character;
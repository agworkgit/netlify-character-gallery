import './character-gallery.css';

function Character(props) {
    return (<div className='character-card'>
        <ul>
            <h2>{props.name}</h2>
            <li>Height: {props.height}</li>
            <li>Race: {props.race}</li>
            <li>Gender: {props.gender}</li>
            <li>Date of Birth: {props.birth}</li>
            <li>Spouse: {props.spouse}</li>
            <li>Hair: {props.hair}</li>
            <li>Realm: {props.realm}</li>
            <li>Date of Death: {props.death}</li>
        </ul>

        <div className="img-wrapper">
            <img src={props.imgUrl} alt="" />
        </div>
    </div>);
}

export default Character;
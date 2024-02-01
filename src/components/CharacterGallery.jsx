import characterData from '../data/characterData.json';
import Character from './Character';
import './character-gallery.css';

function CharacterGallery() {
    return (
        <div>
            {characterData.map(
                (character) => <Character 
                key={character.id}
                name={character.name}
                gender={character.gender}
                hair={character.hair}
                race={character.race}
                realm={character.realm}
                spouse={character.spouse}
                birth={character.birth}
                death={character.death}

                imgUrl={character.imgUrl}
                />  
            )}
        </div>
    );
}

export default CharacterGallery;
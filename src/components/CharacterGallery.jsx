import characterData from '../data/characterData.json';
import Character from './Character';
import './character-gallery.css';

function CharacterGallery() {
    return (
        <div>
            {characterData.map(
                (character) => <Character 
                name={character.name}
                key={character.id}
                gender={character.gender}
                hair={character.hair}
                race={character.race}
                realm={character.realm}
                spouse={character.spouse}
                birth={character.birth}
                death={character.death}
                height={character.height}

                imgUrl={character.imgUrl}
                />  
            )}
        </div>
    );
}

export default CharacterGallery;
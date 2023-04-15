export default function CharacterDetails ({ character }) {
  return (
    <div className='character_details'>
      <img src={character.image} alt={character.name} />
      <div>
        <h2>{character.name}</h2>
        <h2 className='letter-color'>{character.original_name}</h2>
        <p>{character.description}</p>
        <p>【ＣＶ】: {character.cv}</p>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import Title from './Title'
import CharacterDetails from './CharacterDetails'

export default function Characters () {
  const [data, setData] = useState()
  const [character, setCharacter] = useState(0)

  useEffect(() => {
    fetch('https://oshi-no-ko-fanpage.netlify.app/characters')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  const handleCharacter = (index) => {
    setCharacter(index)
  }
  return (
    <div className='characters_container' id='characters'>
      <Title title='Characters' alt />
      {data && (
        <>
          <CharacterDetails character={data[character]} />
          <div className='characters_list'>
            {data.map((item, index) => {
              return (
                <img
                  onClick={() => handleCharacter(index)}
                  key={item.name}
                  src={item.icon}
                  alt={item.name}
                  className={item.name === data[character].name ? 'active' : ''}
                />
              )
            })}
          </div>
        </>
      )}

    </div>
  )
}

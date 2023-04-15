import spark from '../assets/icons/sparkler1.png'
import sparkAlt from '../assets/icons/sparkler1-alt.png'

export default function Title ({ title, alt, special }) {
  const newTitle = title.split('')
  return (
    <div className='title_container'>
      <img src={alt ? sparkAlt : spark} alt='sparkler' />
      <div className='title_container__title'>
        {newTitle.map((letter, index) => {
          if (index === newTitle.length - 2) {
            return <h2 key={index} className={special ? 'letter-special' : 'letter-color'}>{letter}</h2>
          }
          return (
            <h2 key={index} className='letter'>{letter}</h2>
          )
        })}
      </div>
      <img src={alt ? sparkAlt : spark} alt='sparkler' />
    </div>
  )
}

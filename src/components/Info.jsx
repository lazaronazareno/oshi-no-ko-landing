import spark from '../assets/icons/sparkle-alt.png'
import spark1 from '../assets/icons/sparkler-alt.png'
import Title from './Title'

export default function Info () {
  return (
    <div className='info' id='about'>
      <Title title='About' />
      <p>Sixteen-year-old Ai Hoshino is a talented and beautiful idol who is adored by her fans. She is the personification of a pure, young maiden. But all that glitters is not gold.</p>
      <p>Gorou Amemiya is a countryside gynecologist and a big fan of Ai. So when the pregnant idol shows up at his hospital, he is beyond bewildered. Gorou promises her a safe delivery. Little does he know, an encounter with a mysterious figure would result in his untimely death—or so he thought.</p>
      <p> Opening his eyes in the lap of his beloved idol, Gorou finds that he has been reborn as Aquamarine Hoshino—Ai's newborn son! With his world turned upside down, Gorou soon learns that the world of showbiz is paved with thorns, where talent does not always beget success. Will he manage to protect Ai's smile that he loves so much with the help of an eccentric and unexpected ally?</p>
      {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
        <rect width='256' height='256' fill='none' />
        <path d='M138.7,175.5l-19.2,52.1a8,8,0,0,1-15,0L85.3,175.5a8.1,8.1,0,0,0-4.8-4.8L28.4,151.5a8,8,0,0,1,0-15l52.1-19.2a8.1,8.1,0,0,0,4.8-4.8l19.2-52.1a8,8,0,0,1,15,0l19.2,52.1a8.1,8.1,0,0,0,4.8,4.8l52.1,19.2a8,8,0,0,1,0,15l-52.1,19.2A8.1,8.1,0,0,0,138.7,175.5Z' fill='none' stroke='#ff0000' stroke-linecap='square' stroke-linejoin='round' stroke-width='12' />
      </svg> */}
      <div className='spark_container'>
        <img src={spark} alt='spark' className='spark' />
        <img src={spark1} alt='spark' className='spark' />
        <img src={spark} alt='spark' className='spark' />
        <img src={spark1} alt='spark' className='spark' />
      </div>
    </div>
  )
}

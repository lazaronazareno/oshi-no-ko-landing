import ReactPlayer from 'react-player'

export default function Home () {
  return (
    <div className='home' id='home'>
      <div className='video-background'>
        <ReactPlayer
          width='100%'
          height='100%'
          className='video-background__video'
          url='https://youtu.be/BQ28u-8c-hI'
          muted
          playing
          loop
        />
        <div className='video-overlay'>
          <img src='./src/assets/logo.png' alt='Oshi no Ko Logo' />
          <a href='https://www.hidive.com/tv/oshi-no-ko' target='_blank' rel='noopener noreferrer'>
            <button type='button' className='button'>Watch Now!</button>
          </a>
        </div>
      </div>
      <svg width='0' height='0'>
        <defs>
          <filter id='interference'>
            <feTurbulence
              baseFrequency='0.955, 0.010'
              numOctaves={1}
              seed='0'
              type='fractalNoise'
              result='static'
            >
              <animate
                attributeName='seed'
                values='0;20'
                dur='1000ms'
                repeatCount='indefinite'
              />
            </feTurbulence>
            <feDisplacementMap
              scale='10'
              in='SourceGraphic'
              in2='static'
            />
          </filter>
        </defs>
      </svg>
      <p className='home_indicator'>➧</p>
    </div>
  )
}

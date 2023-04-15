import Title from './Title'
import ReactPlayer from 'react-player'
import play from '../assets/icons/play.png'
import pause from '../assets/icons/pause.png'
import sound from '../assets/icons/sound.png'
import mute from '../assets/icons/mute.png'
import { useState } from 'react'

export default function Music () {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const handlePlay = () => {
    setPlaying(!playing)
  }

  const handleMute = () => {
    setMuted(!muted)
  }
  return (
    <div className='music_container' id='music'>
      <Title title='Music' special />
      <div className='music_content'>
        <div className='music_video_container'>
          <img src='../src/assets/tv_border.png' alt='tv-border' />
          <ReactPlayer
            width='95%'
            height='16.6rem'
            url='https://youtu.be/ZRtdQ81jPUQ'
            playing={playing}
            muted={muted}
            className='music_video'
          />
          <div className='music_video__controls'>
            <img onClick={handlePlay} src={playing ? pause : play} alt='play - pause button' />
            <img onClick={handleMute} src={muted ? sound : mute} alt='sound - mute button' />
          </div>
        </div>
        <div>
          <h3>YOASOBI「アイドル」</h3>
          <h3>OFFICIAL MV</h3>
          <p>Music : Ayase <a href='https://twitter.com/ayase_0404' target='_blank' rel='noopener noreferrer'>Social Media</a></p>
          <p>Vocal : ikura <a href='https://twitter.com/ikutalilas' target='_blank' rel='noopener noreferrer'>Social Media</a></p>
          <a href='https://youtu.be/ZRtdQ81jPUQ' target='_blank' rel='noopener noreferrer'>
            <button>Watch</button>
          </a>
        </div>
      </div>
    </div>
  )
}

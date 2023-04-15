export default function Header () {
  return (
    <header>
      <a href='#home'>
        <img src='https://i.ibb.co/WD3G1LX/Oshi-no-Ko-Logo.png' alt='logo' />
      </a>
      <nav>
        <div className='nav-btn'>
          <label htmlFor='nav-check'>
            <span />
            <span />
            <span />
          </label>
        </div>
        <input title='nav-check' type='checkbox' id='nav-check' />
        <ul className='nav-links'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#characters'>Characters</a></li>
          <li><a href='#music'>Music</a></li>
        </ul>
      </nav>
    </header>
  )
}

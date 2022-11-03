import './index.css'

const Navbar = props => {
  const {score, seconds} = props

  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo-size"
      />
      <ul className="nav-item">
        <li>
          <p className="scr">
            Score: <span>{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time-style">{seconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

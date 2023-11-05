// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props

  return (
    <nav className="main-nav-bar-section">
      <div className="main-navbar-section">
        <div className="main-logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-icon"
          />
          <h1 className="navbar-para">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="second-navbar-section">
            <p className="scoring">Score: {currentScore}</p>
            <p className="scoring">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar

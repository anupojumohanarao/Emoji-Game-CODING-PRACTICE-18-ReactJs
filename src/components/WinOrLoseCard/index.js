// Write your code here.
import './index.css'

const wonGame = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const losGame = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const mainWinOrLoseImage = isWon ? wonGame : losGame
  const mainGameStatus = isWon ? 'You Won' : 'You Lose'
  const mainScore = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-section">
      <div className="main-win-lose-card-section">
        <h1 className="win-lose-para">{mainGameStatus}</h1>
        <p className="best-score">{mainScore}</p>
        <p className="total-points">{score}/12</p>
        <button
          className="play-agin-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img
          src={mainWinOrLoseImage}
          alt="win or lose"
          className="winLose-images"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard

// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiButton = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-section">
      <button
        className="emoji-button"
        type="button"
        onClick={onClickEmojiButton}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard

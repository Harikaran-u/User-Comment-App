// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {userComments, bg, changeStatus, deleteComment} = props

  const random = Math.floor(Math.random() * bg.length)
  const color = bg[random]

  const {username, userComment, isLiked, id} = userComments

  const userLikeStatus = () => {
    changeStatus(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const commentList = (
    <li className="cmt-list">
      <div className="user-cont">
        <p className={`${color} profile-logo`}>{username[0]}</p>
        <div className="user-name-cmt-cont">
          <div className="user-time-cont">
            <h1 className="user-name">{username}</h1>
            <span className="cmt-time">{formatDistanceToNow(new Date())}</span>
          </div>

          <p className="user-cmt-des">{userComment}</p>
        </div>
      </div>
      <div className="like-delete-cont">
        <button
          type="button"
          className="like-delete-btn"
          onClick={userLikeStatus}
        >
          <img className="like-delete" alt="like" src={imgUrl} />
        </button>
        <button
          type="button"
          className="like-delete-btn"
          onClick={onDeleteComment}
          data-testId="delete"
        >
          <img
            className="like-delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr className="hr-line" size="3" />
    </li>
  )
  return commentList
}

export default CommentItem

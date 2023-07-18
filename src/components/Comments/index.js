import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
// Write your code here

class Comments extends Component {
  state = {
    inputUsername: '',
    inputUserComment: '',
    userCommentList: [],
    count: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {inputUsername, inputUserComment} = this.state

    if (inputUsername === '' || inputUserComment === '') {
      console.log('Please Enter Valid Input!!!')
    } else {
      const newComment = {
        id: uuidv4(),
        username: inputUsername,
        userComment: inputUserComment,
        isLiked: false,
      }
      this.setState(prevState => ({
        userCommentList: [...prevState.userCommentList, newComment],
        inputUsername: '',
        inputUserComment: '',
        count: prevState.count + 1,
      }))
    }
  }

  changeStatus = id => {
    this.setState(prevState => ({
      userCommentList: prevState.userCommentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      userCommentList: prevState.userCommentList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  saveUsername = event => {
    this.setState({inputUsername: event.target.value})
  }

  saveUserComment = event => {
    this.setState({inputUserComment: event.target.value})
  }

  render() {
    const {inputUsername, inputUserComment, userCommentList, count} = this.state

    const commentApp = (
      <div className="home-page-cont">
        <div className="comment-cont">
          <div className="top-cont">
            <h1 className="heading">Comments</h1>
            <p className="title-description">
              Say something about 4.0 Technologies
            </p>

            <form className="user-input-cont" onSubmit={this.onAddComment}>
              <input
                type="text"
                className="user-input"
                placeholder="Your Name"
                onChange={this.saveUsername}
                value={inputUsername}
              />
              <textarea
                className="text-area"
                type="text"
                placeholder="Your Comment"
                rows="6"
                cols="50"
                onChange={this.saveUserComment}
                value={inputUserComment}
              >
                {}
              </textarea>
              <button type="submit" className="add-btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="cmt-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr size="3" className="hr-line" />
        <div className="cmt-count-cont">
          <span className="comment-count">{count}</span>
          <p className="cmt">Comments</p>
        </div>
        <ul className="user-comments-cont">
          {userCommentList.map(eachUser => (
            <CommentItem
              userComments={eachUser}
              key={eachUser.id}
              bg={initialContainerBackgroundClassNames}
              changeStatus={this.changeStatus}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
    return commentApp
  }
}

export default Comments

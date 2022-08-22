// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickEmoji = () => {
    this.setState({isClicked: true})
  }

  getFromProps = props => {
    const {id, name, imageUrl} = props
    return (
      <li className="emoji-cont" key={id}>
        <img
          src={imageUrl}
          className="emojis"
          alt={name}
          onClick={this.onClickEmoji}
        />
        <p className="emoji-name">{name}</p>
      </li>
    )
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state

    let returnPage

    if (isClicked === false) {
      returnPage = (
        <div className="bg-container">
          <div className="bg-card">
            <h1 className="emoji-head">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="u-list-cont">
              {emojis.map(eachEmoji => this.getFromProps(eachEmoji))}
            </ul>
          </div>
        </div>
      )
    } else {
      returnPage = (
        <div className="love-bg-container">
          <div className="love-bg-card">
            <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
            <h1 className="thank-you-msg">Thank You!</h1>
            <p className="thank-you-desc">
              We will use your feedback to improve our customer performance
            </p>
          </div>
        </div>
      )
    }
    return <div>{returnPage}</div>
  }
}

export default Feedback

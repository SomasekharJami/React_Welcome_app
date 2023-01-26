import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onClicking = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
    console.log('clicked')
  }

  render() {
    const {isSubscribed} = this.state

    let subButton
    if (isSubscribed === true) {
      subButton = (
        <button className="bton" type="button" onClick={this.onClicking}>
          Subscribe
        </button>
      )
    } else {
      subButton = (
        <button className="bton" type="button" onClick={this.onClicking}>
          Subscribed
        </button>
      )
    }
    return (
      <div className="mainCon">
        <h1 className="mainH">Welcome</h1>
        <p className="mainP">Thank you! Happy Learning</p>
        {subButton}
      </div>
    )
  }
}

export default Welcome

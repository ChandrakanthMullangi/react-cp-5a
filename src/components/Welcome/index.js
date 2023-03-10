// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  statusChange = () => {
    this.setState(prevState => {
      if (prevState.text === 'Subscribe') {
        return {text: 'Subscribed'}
      }
      return {text: 'Subscribe'}
    })
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Welcome </h1>
        <p className="description">Thank you! Happy Learning </p>
        <button type="button" className="btn" onClick={this.statusChange}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coin: true, total: 0, heads: 0, tails: 0}

  coinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        coin: true,
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    } else {
      this.setState(prevState => ({
        coin: false,
        tails: prevState.tails + 1,
        total: prevState.total + 1,
      }))
    }
  }

  render() {
    const {coin, total, heads, tails} = this.state
    return (
      <div className="main_container">
        <div className="background_container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {coin ? (
            <img
              alt="toss result"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          ) : (
            <img
              alt="toss result"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}
          <button type="button" className="button" onClick={this.coinToss}>
            Toss Coin
          </button>
          <div className="down_container">
            <p className="down_para">Total: {total}</p>
            <p className="down_para">Heads: {heads}</p>
            <p className="down_para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

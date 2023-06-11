// Write your JS code here
import {Component} from 'react'

import Items from '../CryptocurrencyItem'

import './index.css'

class List extends Component {
  render() {
    const {List1} = this.props

    return (
      <div className="con1">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul className="con2">
          <li className="con3">
            <h1 className="head1">Coin Type</h1>
            <div className="con4">
              <h1 className="para1">USD</h1>
              <h1 className="para2">EURO</h1>
            </div>
          </li>
          {List1.map(each => (
            <Items key={each.id} Item={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default List

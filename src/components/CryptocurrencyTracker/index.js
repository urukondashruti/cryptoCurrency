import {Component} from 'react'

import Loader from 'react-loader-spinner'

import List from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    status: true,
    List1: [],
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const list = await response.json()
    const formatedList = list.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))

    this.setState({List1: formatedList, status: false})
  }

  render() {
    const {status, List1} = this.state
    return (
      <div className="con1">
        {status ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <List List1={List1} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker

// Write your JS code here
import './index.css'

const Items = props => {
  const {Item} = props
  const {currencyLogo, currencyName, euroValue, id, usdValue} = Item
  return (
    <li className="list3">
      <div className="con7">
        <img src={currencyLogo} className="img3" alt={currencyName} />
        <p className="head1">{currencyName}</p>
      </div>
      <div className="con8">
        <div   className="con10">
           <p className="para1">{usdValue}</p>
        </div>
        <p className="para2">{euroValue}</p>
        </div>
    </li>
  )
}

export default Items

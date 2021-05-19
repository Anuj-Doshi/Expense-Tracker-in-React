import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
function Transaction({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransction} = useContext(GlobalContext)
    return(
        <div>
            <li className={transaction.amount < 0 ? 'minus':' plus'}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransction(transaction.id)}>x</button>
            </li>
        </div>
    )
}

export default Transaction
import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import  Transaction  from './Transaction'
function TransectionList(){
    const {transactions} = useContext(GlobalContext)
    return(
        <div>
            <h3>History</h3>
                <ul className="list">
                    {transactions.map(transaction => (<Transaction transaction={transaction} key={transaction.id}></Transaction>))}
                    
                </ul>
        </div>
    )
}
export default TransectionList
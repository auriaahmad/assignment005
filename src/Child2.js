import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer'; 

const Child2 = () =>{
    //lets make two variables 
    let [state, dispatch] = useReducer(CounterReducer, 1);
    console.log(state)
    return(
        <div>
            <h2>this is second child with counter reducer</h2>
            <h3>value of reducer state is : {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>increment reducer</button>
        </div>
    );
}
export default Child2;
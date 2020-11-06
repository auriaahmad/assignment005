import React, {useContext} from 'react';
import CounterContext from './CounterContext';


const Child = () => {
    let counterValue = useContext(CounterContext)
    return(
        <div>
            <h1>this is the first child using counter context</h1>
            <h6>value of counter is {counterValue[0]}</h6>   
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>increment context</button>       
        </div>
    );
}
export default Child; 
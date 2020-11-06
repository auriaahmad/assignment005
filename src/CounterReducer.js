const CounterReducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1
            
        default:
            //do nothing 
    }
}
export default CounterReducer;
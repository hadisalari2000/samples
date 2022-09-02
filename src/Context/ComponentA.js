import React, {useReducer} from 'react'
import ComponentB from "./ComponentB";


export const CurrentContext = React.createContext({counterState:0,counterDispatch:''});
const initialValuee = 5;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state
    }
}

function ComponentA() {

    const [counter, dispatch] = useReducer(reducer, initialValuee);
    return (
        <CurrentContext.Provider value={{counterState: counter, counterDispatch: dispatch}}>
            <>
                <h1>Component A Counter value {counter}</h1>
                <ComponentB/>
            </>
        </CurrentContext.Provider>
    )
}

export default ComponentA;
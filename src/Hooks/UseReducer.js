import React, {useReducer} from 'react'

const initialValue = {counter1: 0, counter2: 10};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, [action.variable]: state[action.variable] + action.value};
        case 'decrement':
            return {...state, [action.variable]: state[action.variable] - action.value};
        default:
            return {...state}
    }
}

function UseReducer() {

    const [counter, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <div>
                <h1>Count : {counter.counter1}</h1>
                <button onClick={() => dispatch({type: 'increment',variable:'counter1', value: 1})}> Increment 1</button>
                <button onClick={() => dispatch({type: 'decrement',variable:'counter1', value: 1})}> Decrement 1</button>
                <button onClick={() => dispatch({type: 'increment',variable:'counter1', value: 5})}> Increment 5</button>
                <button onClick={() => dispatch({type: 'decrement',variable:'counter1', value: 5})}> Decrement 5</button>
            </div>

            <div>
                <h1>Count : {counter.counter2}</h1>
                <button onClick={() => dispatch({type: 'increment',variable:'counter2', value: 1})}> Increment 1</button>
                <button onClick={() => dispatch({type: 'decrement',variable:'counter2', value: 1})}> Decrement 1</button>
                <button onClick={() => dispatch({type: 'increment',variable:'counter2', value: 5})}> Increment 5</button>
                <button onClick={() => dispatch({type: 'decrement',variable:'counter2', value: 5})}> Decrement 5</button>
            </div>
        </>
    );
}

export default UseReducer;
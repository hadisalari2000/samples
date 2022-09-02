import React, {useState} from 'react'

function UseStateCounterClick() {
    const [counter, setCounter] = useState(0);

    /*function updateCounter(count) {
        for(let i=0;i<count;i++)
            setCounter(counter+1);
    }*/
    function updateCounter(count) {
        setCounter(prevStat => prevStat + count);
    }

    return (
        <>
            <h1>Click Counter {counter}</h1>

            {/*<button onClick={() => setCounter(counter + 1)}>Click Decrement 1</button>
            <button onClick={() => setCounter(counter - 1)}>Click Increment 1</button>
            <button onClick={()=>updateCounter(5)}>Click Decrement 5</button>*/}

            <button onClick={() => updateCounter(1)}>Click Decrement 1</button>
            <button onClick={() => updateCounter(-1)}>Click Increment 1</button>
            <button onClick={() => updateCounter(5)}>Click Decrement 5</button>
        </>
    );

}

export default UseStateCounterClick;
import React, {useState, useEffect} from 'react'

function UseEffectClickCounter() {

    const [allStates, setAllStates] = useState({counter: 0, test: 0});

    useEffect(() => {
        console.log('rendered Counter');
        document.title = `Clicked : ${allStates.counter} times - ${allStates.test}`
    }, [allStates.counter]);

    useEffect(() => {
        console.log('rendered Test');
        document.title = `Clicked : ${allStates.counter} times - ${allStates.test}`
    }, [allStates.test]);

    function clickHandler(event) {
        setAllStates((prevState) => {
            return ({...prevState, [event.target.name]: prevState[event.target.name] + 1})
        })
    };

    return (
        <>
            <button name='counter' onClick={(e) => clickHandler(e)}>Click Me For Update
                Counter {allStates.counter}</button>
            <button name='test' onClick={(e) => clickHandler(e)}>Click Me For Update Test {allStates.test}</button>
        </>
    );
}

export default UseEffectClickCounter;
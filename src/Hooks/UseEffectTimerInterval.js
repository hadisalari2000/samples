import React, {useState, useEffect} from 'react'

function UseEffectTimerInterval() {

    const [tick, setTick] = useState(0);

    useEffect(() => {
        const interval=setInterval(()=>{return(setTick(prevState=>prevState+1))},1000);
        return()=>{
            clearInterval(interval)
        }
    },[]);

    return (
        <>
            <h1>{tick}</h1>
        </>
    );
}

export default UseEffectTimerInterval;
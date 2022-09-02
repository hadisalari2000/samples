import React, {useState, useEffect} from 'react'

function UseEffectEventListener() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMoseMove=(event)=>{
        console.log('rendered');
        setX(event.clientX);
        setY(event.clientY);
    };

    useEffect(() => {
        window.addEventListener('mousemove',logMoseMove);
        return()=>{
            window.removeEventListener('mousemove',logMoseMove);
        }
    },[]);

    return (
        <>
            <h1>X:{x}   -    Y:{y}</h1>
        </>
    );
}

export default UseEffectEventListener;
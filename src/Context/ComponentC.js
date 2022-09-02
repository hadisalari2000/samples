import React,{useContext} from 'react';
import {CurrentContext} from "./ComponentA";

function ComponentC() {

    const cContext=useContext(CurrentContext);
    return (
        <>
            <h3>Component C counter : {cContext.counterState}</h3>
            <button onClick={()=>cContext.counterDispatch('increment')}>Increment</button>
            <button onClick={()=>cContext.counterDispatch('decrement')}>Decrement</button>
        </>
    )
}

export default ComponentC;
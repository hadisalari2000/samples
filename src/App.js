import './App.css';
import React,{useState} from "react";
import ApiGetEmployees from "./Hooks/ApiGetEmployees";

function App() {

    const[display,setDisplay]=useState(true);
    return (
        <>
            {/*<CounterClickClass/>
            <br/>
            <HookCounterClass/>*/}

            {/*<UseStateInputForm/>*/}

            {/*<UseEffectClickCounter/>*/}

            {/*{display && <UseEffectEventListener/>}
            <button onClick={()=>setDisplay(!display)}>{display?'Hide Event Listener':'Show Event Listener'}</button>*/}

            {/*<UseEffectTimerInterval/>*/}

            <ApiGetEmployees/>
        </>
    );
}

export default App;

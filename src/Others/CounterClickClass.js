import React from "react";

class CounterClickClass extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            counter:0
        }
    }

    onHandelClick=()=> {
        this.setState((prevState)=>{
            return{counter:prevState.counter+1}
        })
    };

    render() {
        return (
            <button onClick={this.onHandelClick}>Click {this.state.counter}</button>
        );
    }
}
export default CounterClickClass;
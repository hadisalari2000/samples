import React from 'react'

function CheckBoxFunctionalComponent(props) {

    return (
        <>
            <input
                type='checkbox'
                key={props.user_index}
                checked={props.checked}/>
            {props.value}
            <br/>
        </>
    );
}

export default CheckBoxFunctionalComponent;
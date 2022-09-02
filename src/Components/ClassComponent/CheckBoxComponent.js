import React from 'react'

class CheckBoxComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <>
                <input
                    type='checkbox'
                    key={this.props.user_index}
                    checked={this.props.checked}
                />{this.props.value}
                <br/>
            </>
        );
    }
}

export default CheckBoxComponent;
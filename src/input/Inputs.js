

import React from "react";
import '../input/Inputs.css'

class Input extends React.Component {
    render  () {
        return (
            <div className="ctn-inputs">
                <label>{this.props.name}</label>
                <input type={this.props.types == 'text' ? 'text' : 'number'}></input>
            </div>
        )
    }
};

export default Input;
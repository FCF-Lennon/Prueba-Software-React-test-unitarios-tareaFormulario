

import React from "react";
import '../input/Inputs.css'

class Input extends React.Component {

    render  () {
        // con la funcion devuelvo el valor del evento capturado en el input
        let handleChange = (event) => {
            console.log(event.target.value)
        };

        return (
            <div className="ctn-inputs">
                <label>{this.props.name}</label>
                {/* con onChange = {handleChange] capturo todo cambio que sufra el input */}
                <input onChange={handleChange} type={this.props.types === 'text' ? 'text' : 'number'}></input>
            </div>
        )
    }
};

export default Input;
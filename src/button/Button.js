
import React from "react";
import '../button/Button.css';

class Button extends React.Component {
    
    render() {

        return (
            <div className = "ctn-button" >
                <button onClick={this.props.enviar}>Enviar</button>
            </div>
        )
    }
};

export default Button;
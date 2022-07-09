import React from "react";
import '../select/Select.css'

class Select extends React.Component {
    render () {
        return (  
            <div className="ctn-select">
                <label>{this.props.name}</label>
                <select>
                    <option>Seleccione un Item</option>
                    {this.props.items.map( item => {
                        return (<option key={item.key}>{item.nombre}</option>) // el value en jsx es key
                    })};
                </select>
            </div>
        )
    }
};

export default Select;
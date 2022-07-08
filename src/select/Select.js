import React from "react";
import '../select/Select.css'

class Select extends React.Component {
    render () {
        return (  
            <div className="ctn-select">
                <label>{this.props.name}</label>
                <select>
                    {this.props.items.map( item => {
                        return (<option>{item}</option>)
                    })};
                </select>
            </div>
        )
    }
};

export default Select;
import React from "react";
import '../select/Select.css'

class Select extends React.Component {
    render () {
        return (  
            <div className="ctn-select">

                <label>{this.props.name}</label>

                {/* Al crear una condicion dentro de una etiqueta html en jsx debe ir sin (if) 
                y la condicion debe estar entre {} y no en ()*/} 
                {/* Se crea una condición en caso de que los select no tengan datos
                y que esta devuelva un mensaje  */}

                {/* aparece 2 veces en consola preguntar al profe porque */}
                {this.props.items === undefined && (console.log('Hay un elemento select sin datos.'))} 
                
                {/* luego creamos otra condicion para expresar lo contrario */}

                {this.props.items !== undefined && (
                    <select>
                    <option hidden>Seleccione un Item</option>
                    {this.props.items.map( item => {
                        return (<option key={item.key}>{item.nombre}</option>) // el value en jsx es key
                    })};
                </select>
                )}
            </div>
        )
    }
};

export default Select;
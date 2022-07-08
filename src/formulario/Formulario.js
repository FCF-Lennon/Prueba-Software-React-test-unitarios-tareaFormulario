import React from "react";
import Input from "../input/Inputs";
import Select from "../select/Select";
import Button from "../button/Button";
import '../formulario/Formulario.css'

class Formulario extends React.Component {

    render() {

        let marca = ['Seleccione Aqui','Nissan', 'Citroen', 'Kia', 'Pegeut'];
        let modelo = ['Seleccione Aqui', 'NP100', 'C3 Nebula', 'Rio 5 Sport', '206'];

        return (
            <div className="container">
                <Input  types='text' name= 'Nombre:'/>
                <Input  types='number' name= 'Año:'/> 
                <Select items={marca} name= 'Marca:' />
                <Select items={modelo} name= 'Modelo:' />
                <Button />
            </div>
        )
    }
};

export default Formulario;
import React from "react";
import Input from "../input/Inputs";
import Select from "../select/Select";
import Button from "../button/Button";
import '../formulario/Formulario.css'

class Formulario extends React.Component {

    render() {

        /* let marca = ['Seleccione Aqui','Nissan', 'Citroen', 'Kia', 'Pegeut'];
        let modelo = ['Seleccione Aqui', 'NP100', 'C3 Nebula', 'Rio 5 Sport', '206']; */

        let domMarcas = [
            {key:1, nombre:'Nissan'},
            {key:2, nombre:'Citroen'},
            {key:3, nombre:'Kia'},
            {key:4, nombre:'Pegeut'},
        ];
        
        let domModelos = [
            {key:1, nombre:'NP100'},
            {key:2, nombre:'C3 Nebula'},
            {key:3, nombre:'Rio 5 Sport'},
            {key:4, nombre:'206'},
        ];

        return (
            <div className="container">
                <Input  types='text' name= 'Nombre:'/>
                <Input  types='number' name= 'Año:'/> 
                <Select items={domMarcas} name= 'Marca:' />
                <Select items={domModelos} name= 'Modelo:' />
                <Button />
            </div>
        )
    }
};

export default Formulario;
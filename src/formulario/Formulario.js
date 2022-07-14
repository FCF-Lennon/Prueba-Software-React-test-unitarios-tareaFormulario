import React from "react";
import Input from "../input/Inputs";
import Select from "../select/Select";
import Button from "../button/Button";
import '../formulario/Formulario.css'

class Formulario extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            nombre: '',
            anio: 0,
            marca: '',
            modelo: ''
        }
        this.handleChangeNombre = this.handleChangeNombre.bind(this)
        this.handleChangeAnio = this.handleChangeAnio.bind(this)
        this.handleChangeMarca = this.handleChangeMarca.bind(this)
        this.handleChangeModelo = this.handleChangeModelo.bind(this)
        this.handleSendForm = this.handleSendForm.bind(this)
    }

    domMarcas = [
        {key:1, nombre:'Nissan'},
        {key:2, nombre:'Citroen'},
        {key:3, nombre:'Kia'},
        {key:4, nombre:'Peugeot'},
    ];
    
    domModelos = [
        {key:1, nombre:'NP100'},
        {key:2, nombre:'C3 Nebula'},
        {key:3, nombre:'Rio 5 Sport'},
        {key:4, nombre:'206'},
    ];
        

    handleChangeNombre = (event) => {
        
        this.setState({
            nombre: event.target.value
        })
    }

    handleChangeAnio = (event) => {
        
        this.setState({
            anio: event.target.value
        })
    }

    handleChangeMarca = (event) => {
        
        this.setState({
            marca: event.target.value
        })
    }

    handleChangeModelo = (event) => {
        
        this.setState({
            modelo: event.target.value
        })
    }

    handleSendForm = () => {
        console.log(this.state)
    }


    render() {

        /* let marca = ['Seleccione Aqui','Nissan', 'Citroen', 'Kia', 'Pegeut'];
        let modelo = ['Seleccione Aqui', 'NP100', 'C3 Nebula', 'Rio 5 Sport', '206']; */

        return (
            <div className="container">
                <Input  
                    types='text' 
                    name= 'Nombre:'
                    change={this.handleChangeNombre}
                />
                <Input  
                    types='number'
                    name= 'Año:'
                    change={this.handleChangeAnio}
                /> 
                <Select 
                    items={this.domMarcas} 
                    name= 'Marca:'
                    change={this.handleChangeMarca} 
                    />
                <Select 
                    items={this.domModelos} 
                    name= 'Modelo:'
                    change={this.handleChangeModelo} 
                    />
                <Button enviar={this.handleSendForm}/>
            </div>
        )
    }
};

export default Formulario;
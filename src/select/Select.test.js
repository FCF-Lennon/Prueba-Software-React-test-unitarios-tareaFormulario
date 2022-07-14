/* debemos llamar a renderer desde react y para que corra 
el test es en el teminarl comando npm test */

import renderer from 'react-test-renderer' 
import Select   from './Select'

/* Esta prueba es la mas basica que es verificar si 
el componente select se esta renderizando */

it ('Should render', () => {
    let items = [
        {key:1, nombre:'Nissan'},
        {key:2, nombre:'Citroen'},
        {key:3, nombre:'Kia'},
        {key:4, nombre:'Peugeot'},
    ]

    const component = renderer.create(<Select items={items} />)
    /* expect es un test unitario que compara un resultado con 
    lo que uno espera que haga el componente */
    expect(component).toBeTruthy() // Compilara correctamente todas sus partes
})
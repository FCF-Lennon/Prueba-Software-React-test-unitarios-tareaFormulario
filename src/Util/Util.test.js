import renderer from 'react-test-renderer';
// siempre en el import debe ir lo que se esta exportando del componente
import suma from './Suma';
import resta from './Resta';
import division from  './Division'
import multiplicacion from './Multiplicacion'

describe('Pruebas Unitarias para la funcion Suma', () => {
    it ('Suma 2 numeros', () => {
        const result = suma(6, 7)
        expect(result).toBe(13)
    })
});

describe('Pruebas Unitarias para la funcion Resta', () => {
    it ('Resta 2 numeros', () => {
        const resultado = resta(10, 12)
        expect(resultado).toBe(-2)
    })
});

describe('Pruebas Unitarias para la funcion Multiplicacion', () => {
    it ('Multiplicar 2 numeros', () => {
        const resultado = multiplicacion(5, 2)
        expect(resultado).toBe(10)
    })
});

describe('Pruebas Unitarias para la funcion Division', () => {
    it ('Dividir 2 numeros', () => {
        const resultado = division(5, 2)
        expect(resultado).toBe(2.5)
    })
});

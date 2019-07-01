
let {comprobarCaso, mostrarComprobacionCaso} = require('../04_caso.js')

describe('Funcion comprobarCaso', () => {
    
    it('should be 0 if all uppercase)', () => {
        const cadena = 'HOLA PEPE'
        expect(comprobarCaso(cadena)).toEqual(0)
    });

    it('should be 1 if lowercase)', () => {
        const cadena = 'Hola Pepo'
        expect(comprobarCaso(cadena)).toEqual(1)
    });

    it('should be 2 if upper and lowercase)', () => {
        const cadena = 'Hola Pepo'
        expect(comprobarCaso(cadena)).toEqual(2)
    });

});


describe('Funcion mostrarComprobacionCaso', () => {
    it('should be -sólo mayúsculas- if all uppercase)', () => {
        const cadena = 'HOLA PEPE'
        console.log = jasmine.createSpy("log")
       let msg = mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('sólo mayúsculas')
    });

});
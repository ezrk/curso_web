
///HAY FALLOS, COPIAR EL DEL PROFESOR (NO PERDER COMENTARIOS)


describe('Función esPar', () => {
    let f = require('../11_pares_try.js')

    it('should be "par" if n = 0 ', () => {
        let n = 0
        expect(f.esPar(n)).toEqual(true)
    })

    it('should be "impar" if n = 1 ', () => {
        let n = 1
        expect(f.esPar(n)).toEqual(false)
    })

    it('should be "par" if n = 2 ', () => {
        let n = 2
        expect(f.esPar(n)).toEqual(true) // o es lo mismo poner al final .toBeTruthy();
    })

    it('should be "impar" if n = string "11" ', () => {
        let n = '23'
        expect(f.esPar(n)).toEqual(false) // o es lo mismo poner al final .toBeFalsy();
    })    

    it('should be "par" if n = string "22" ', () => {
        let n = '22'
        expect(f.esPar(n)).toEqual(true)
    })

    it('should be "impar" if n = -5 ', () => {
        let n = -5
        expect(f.esPar(n)).toEqual(false)
    })    

    it('should be "par" if n = -4 ', () => {
        let n = -4
        expect(f.esPar(n)).toEqual(true)
    })
    
    ////HASTA AQUI LO MISMO QUE 10_PARES

    it('should throw error if n = "pepe"', () => {
        let n = 'pepe'
        expect(f.esPar.bind(null, n))
            .toThrowError(/no es un número/); //comprobacion errores
    });

    it('should throw error if n = 4.3', () =>  {
        let n = 4.3
        expect(f.esPar.bind(null, n))
            .toThrow(/no es entero/); //comprueba pero no cheque dentro del error
    });
    
    // n = -56.7

})
describe('Function isEntero', () => {
    let f = require('../10_pares.js')
    /* console.log('-------------------')
    console.log(funcions) */

    it('should be true if n is 2', () => {
        let n = 2
        expect(f.isEntero(n)).toBeTruthy();
    });
    it('should be false if n is 2.2', () => {
        let n = 2.2
        expect(f.isEntero(n)).toBeFalsy();
    });
    it('should be true if n is -2', () => {
        let n = -2
        expect(f.isEntero(n)).toBeTruthy();
    });
    it('should be false if n is -2.2', () => {
        let n = -2.2
        expect(f.isEntero(n)).toBeFalsy();
    });
    it('should be true if n is 0', () => {
        let n = 0
        expect(f.isEntero(n)).toBeTruthy();
    });
    it('should be true if n is "2"', () => {
        let n = "2"
        expect(f.isEntero(n)).toBeTruthy();
    });
});



describe('Función esPar', () => {
    let f = require('../10_pares.js')

    it('should be "true" if n = 0 ', () => {
        let n = 0
        expect(f.esPar(n)).toEqual(true) // o es lo mismo poner al final .toBeTruthy();
    })

    
    it('should be "false" if n = 1 ', () => {
        let n = 1
        expect(f.esPar.bind(n)).toEqual(false) // o es lo mismo poner al final .toBeFalsy();
    })

    it('should be "true" if n = 2 ', () => {
        let n = 2
        expect(f.esPar.bind(n)).toEqual(true) // o es lo mismo poner al final .toBeTruthy();
    })

    it('should be "false" if n = string "11" ', () => {
        let n = '23'
        expect(f.esPar(n)).toEqual(false)
    })    

    it('should be "true" if n = string "22" ', () => {
        let n = '22'
        expect(f.esPar(n)).toEqual(true)
    })

    it('should be "false" if n = -5 ', () => {
        let n = -5
        expect(f.esPar(n)).toEqual(false)
    })    

    it('should be "true" if n = -4 ', () => {
        let n = -4
        expect(f.esPar(n)).toEqual(true)
    })

    it('should be -2 if n = "pepe"', () => {
        let n = 'pepe'
        expect(f.esPar(n)).toEqual(-2);
    })

    it('should be -1 if n = 4.3', () =>  {
        let n = 4.3
        expect(f.esPar(n)).toEqual(-1);
    });
    
    it('should be -1 if n = -6.7', () =>  {
        let n = -56.7
        expect(f.esPar(n)).toEqual(-1);
    });

})
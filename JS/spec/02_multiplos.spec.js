//pruebas Jasmine

isMultiplo = require('../02_multiplos.js')

describe('Pruebas de la función isMultiplo', () => {
    
    it('should be true isMultiplo(2,20)', () => {
        expect(isMultiplo(2,20)).toBeTruthy();   // code snippet- escribir tbt + enter
    });

    it('should be true isMultiplo(2,21)', () => {
        expect(isMultiplo(21,2)).toBeFalsy();   
    });
    it('should be true isMultiplo(-2,21)', () => {
        expect(isMultiplo(-2,21)).toBeFalsy();  
    });

    it('should be true isMultiplo(21,3)', () => {
        expect(isMultiplo(3,21)).toBeTruthy();   
    });
    it('should be true isMultiplo(-2,21)', () => {
        expect(isMultiplo(-2,21)).toBeFalsy();   
    });
    it('should be error if "pepe" isMultiplo of 2', () => {
        expect( () => isMultiplo(2,'pepe') ).toThrow() 
    });
});



/* // Espectativas
console.log('isMultiplo(2,20) debe dar true')
// Prueba
console.log(isMultiplo(2,20))
// Espectativas
console.log('isMultiplo(2,21) debe dar false')
// Prueba
console.log(isMultiplo(2,21))
// Espectativas
console.log('isMultiplo(2,-20) debe dar true')
// Prueba
console.log(isMultiplo(2,-20))
// Espectativas
console.log('isMultiplo(2,-21) debe dar false')
// Prueba
console.log(isMultiplo(2,-21))
// Espectativas
console.log('isMultiplo(3,20) debe dar false')
// Prueba
console.log(isMultiplo(3,20))
// Espectativas
console.log('isMultiplo(3,21) debe dar true')
// Prueba
console.log(isMultiplo(3,21))
 */
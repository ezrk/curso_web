let {isPalindromo, isPaliShort } = require('../08_pali_evelin')

describe('Palindromos: isPalindromo', () => {
    it('should be true La ruta nos aporto otro paso natural', () => {
        let cadena = 'La ruta nos aporto otro paso natural'
        expect(isPalindromo(cadena)).toBeTruthy()
    });
    it('should be falseUn anillo para gobernarlos a todos', () => {
        let cadena = 'Un anillo para gobernarlos a todosl'
        expect(isPalindromo(cadena)).toBeFalsy()
    });
});

describe('Palindromos: isPaliShort', () => {
    it('should be true La ruta nos aporto otro paso natural', () => {
        let cadena = 'La ruta nos aporto otro paso natural'
        expect(isPaliShort(cadena)).toBeTruthy()
    });
    it('should be falseUn anillo para gobernarlos a todos', () => {
        let cadena = 'Un anillo para gobernarlos a todosl'
        expect(isPaliShort(cadena)).toBeFalsy()
    });
});



console.log(isPaliShort('La ruta nos aporto otro paso natural'))
console.log(isPaliShort('Un anillo para gobernarlos a todos'))
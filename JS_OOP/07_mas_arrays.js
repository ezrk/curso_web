const aDatos = ['perro', 'gato']
    aDatos.length

    // Implementadas como inmutables
    console.log(aDatos.concat(['leon', 'tigre']))
    console.log(aDatos)

    // Implementadas com mutables (cambia aDatos)
    aDatos.sort() //reordena un array
    console.log(aDatos)

    const aNumbers = [32, 3, 2, 21, 56, 5, 9]
    const aNumerosOriginal = aNumbers.slice()

    aNumbers.sort( (a,b) => a-b )
    console.log(aNumbers)
    console.log(aNumerosOriginal.reverse())
    console.log(aNumerosOriginal)


    //Métodos que permiten fraccionar arrays:    
    let nombres = ['Luis', 'Juan', 'Rosa', 'David', 'Julio']
     // de forma inmutable
    let seleccion = nombres.slice(1, 3 )
    console.log(seleccion)
    console.log(nombres)

    //clonar
    let clon = nombres.slice()
    
    // de forma mutable (extractor de trozos de array)
    seleccion = nombres.splice(1, 3)
    console.log(seleccion)
    console.log(nombres)

    //splice para añadir 
    let paises = ['Francia', 'Italia', 'Hungría', 'Holanda']
    paises.splice(2, 0, 'España')
    console.log(paises)
    
    //Pilas y colas

    //Pila -> stack FiLO (El primero en entrar, el último en salir)
    paises.push('Portugal', 'Alemania') //Añade al ppio de la fila
    paises.pop() //Elimina el último elemento
    console.log(paises.push('Portugal', 'Alemania'))

    //Colas -> heap FIFO // el primero en entrar es el primero en salir
    paises.unshift('Croacia')
    paises.shift()
   
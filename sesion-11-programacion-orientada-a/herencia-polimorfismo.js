// inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anos.`)
    }

    saludoDesarrollador() {

    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludo() { // Override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Bryan", 25, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo => Varias formas
class Persona {
    // Private -> #
    // Private -> Solo se puede acceder desde dentro de la clase
    #nombre
    #edad


    // Protected -> _
    // Protected -> solo se puede acceder desde dentro de la clase y desde clases descendientes

    _isDeveloper = true
    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anos.`)
    }

    obtenNombre() { // Funcion getter -> nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Bryan", 40)
// console.log(persona)
// console.log(persona.nombre)
// persona.saludo()
// console.log(persona.obtenNombre())
// // console.log(persona.#obtenEdad())
// console.log(persona._isDeveloper)

// Getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(14)
console.log(persona.getEdad())
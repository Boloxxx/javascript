class Persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anos.`)
    }
}

const nueva_persona = new Persona("Bryan", 25, true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 // iniciacilar
console.log(typeof numero)

let persona_2 = new Persona("Maria", 34, false) // instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)


// instanceof -> similar a typeof pero para clases
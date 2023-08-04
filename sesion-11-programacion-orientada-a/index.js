const persona = {
    nombre: "Bryan",
    edad: 25,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola")
    }
}

// console.log(persona)

persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 18,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola")
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Maria", 25, false)
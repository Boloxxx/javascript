const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //return false
    throw new Error("El valor debe de ser de tipo numero")
}

//const elDoble = miFuncion("ala")
const numero = 8

try {
    // codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    // en caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("Error!")
} finally {
    console.log("Esto se va a ejecutar si se produce algun error, como si no existe ninguno")
}

// internalError, SyntaxError, TypeError, RangeErrror y ReferenceError
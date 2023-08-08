// localStorage.setItem("nombre", "Bryan")
// localStorage.setItem("nombre", "Ryan")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify(
//     { nombre: "Bryan", edad: 25 }))

// console.log(JSON.parse(localStorage.getItem
//     ("persona")))

// JSON.stringify -> convierte un objeto/array en string
// JSON.parse -> convierte un objeto/array convertido a travez de stringify en un objeto de javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Bryan")

/* Cookies */

document.cookie = "nombreCookie=BryanCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)


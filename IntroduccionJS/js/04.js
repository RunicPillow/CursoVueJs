// Objetos

const prodcuto = {
    nombre : "Tablet",
    precio : 200,
    disponible : true
}

console.log(prodcuto)
console.log(typeof prodcuto)
console.table(prodcuto)

// Destructuring
const { nombre, disponible } = prodcuto
console.log(nombre)
console.log(disponible)

// Object literal
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    user : usuario
}

console.log(nuevoObjeto)
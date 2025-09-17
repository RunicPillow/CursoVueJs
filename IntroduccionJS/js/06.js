// Destructuring de 2 0 mas objetos

const prodcuto = {
    nombre : "Tablet",
    precio : 200,
    disponible : true
}

const cliente = {
    nombre : "Juan",
    premium : true
}

const { nombre: nombre } = prodcuto
const { nombre: nombreCliente } = cliente

console.log(nombre)
console.log(nombreCliente)
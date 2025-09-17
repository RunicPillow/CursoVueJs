const prodcuto = {
    nombre : "Tablet",
    precio : 200,
    disponible : true
}

Object.freeze(prodcuto)
//Object.seal(prodcuto) // permite modificar proiedades, pero no permite agregar o eliminar nuevas propiedades 

// Reescribir un valor
prodcuto.nombre = "Monitor"

// Añadir un valor
prodcuto.imagen = "imagen.jpg"

// Eliminar
// delete prodcuto.disponible
// const { disponible, precio, ...prodcuto2 } = prodcuto

console.log(prodcuto)
// console.log(prodcuto2)
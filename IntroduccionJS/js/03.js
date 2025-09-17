// Tipos de datos

// undefined
let cliente
console.log(typeof cliente)

// boolean
const descuento = true
console.log(typeof descuento)

// number
const numero1 = 20.30
const numero2 = 30
const numero3 = 200

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// Strings
const alumno = "Juan"
console.log(typeof alumno)

// Symbols, no hay dos symbol que sean iguales
const primerSymbol = Symbol(1)
const segundoSymbol = Symbol(1)

console.log(primerSymbol === segundoSymbol)

// Object
const numeros = [1, 2, 3]
const descuento1 = null
const alumno1 = {}

console.log(typeof numeros)
console.log(typeof descuento1)
console.log(typeof alumno1)
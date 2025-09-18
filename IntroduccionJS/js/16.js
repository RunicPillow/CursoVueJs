const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git']
const numeros = [10, 20, 30]

// includes
let  resultado = tecnologias.includes('GraphQL')

// findIndex
resultado = tecnologias.findIndex(tech => tech === 'Git')

// Some
resultado = numeros.some(numero => numero > 25)

// Find
resultado = numeros.find(numero => numero === 10)

// Every
resultado = numeros.every(numero => numero > 5)

// Reduce
resultado = numeros.reduce( (total, numero) => numero + total,  0)

// Filter
resultado = tecnologias.filter( tech => tech === 'Vue.js')

console.log(resultado)
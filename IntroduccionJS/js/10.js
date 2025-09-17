const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']

// tecnologias.unshift('Git') // añade elemento al inicio del arreglo
// tecnologias.push('Git') // añade elemento al final del arreglo

// const nuevoArreglo = [...tecnologias, 'Git']

// tecnologias.pop() // elimina elemento del final del arreglo
// tecnologias.shift() // elimina del inicio del arreglo

// tecnologias.splice(2, 1) // elimina a partir de una posicion

const tecnologias2 = tecnologias.filter( function(tech){
    return tech !== 'HTML'
} )

console.log(tecnologias2)
// console.log(nuevoArreglo)
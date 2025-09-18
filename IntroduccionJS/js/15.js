// Arrow functions
// solo se pueden usar en array methods o en Function expression

const sumar = (numero1 = 0, numero2 = 0) => {
    console.log(numero1 + numero2)
}

const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']


// Ejemplo 1
// cuando se tiene solo un parametro se pueden eliminar parentesis
// cuando se tiene una sola linea en la funcion se pueden eliminar las {}
tecnologias.forEach( tech => console.log(tech) )

// const arrayForeach = tecnologias.forEach(function(tech) {
//     return tech
// })


// Ejemplo 2
// cuando solo se tiene una linea en la funcion y se tiene return, se quita el return,
// ya que se da por implicito que se tiene el return
const arrayMap = tecnologias.map(tech => tech)

// const arrayMap = tecnologias.map(function(tech) {
//     return tech
// })


// Ejemplo 3
const tecnologias2 = tecnologias.filter(tech => tech !== 'HTML')

// const tecnologias2 = tecnologias.filter( function(tech){
//     return tech !== 'HTML'
// } )

sumar(1, 2)
console.log(arrayMap)
console.log(tecnologias2)

const pc = require('picocolors')


// function promesaSencilla() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log(
//                 pc.bgGreen('Promesa resuelta!')));
//         }, 2000)
//     })
// }

// async function asyncCall() {
//     console.log(pc.bgRed('Llamando funcion...'))
//     const result = await promesaSencilla()
//     console.log(result)
// }

// asyncCall();


//Ejercicio 3 Promise



// function promesaTres() {
//     const number = 3;
//     return new Promise((res, rej) => {
//         res(console.log(`El resultado es`, number + number))
//     })
// }

// promesaTres()


// Ejercicio mejorado separando la logica y agregando un manejo de errores

function promesaTresMejorada() {
    const number = 3;

    return new Promise((res, rej) => {
        if (typeof number !== 'number') {
            rej(new Error(pc.bgRed('El valor no es un numero!')))
        } else {
            const resultado = number + number;
            res(resultado)
        }
    })
}
promesaTresMejorada()
    .then(resultado => {
        console.log(pc.bgGreen(`El resultado es: ${resultado}`))
    }).catch(error => {
        console.error('Ocurrio un error:', error)
    })
const pc = require('picocolors')


function promesaSencilla() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(
                pc.bgGreen('Promesa resuelta!')));
        }, 1000)
    })
}




promesaSencilla();
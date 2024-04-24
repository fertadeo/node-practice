const fs = require('node:fs')
const color = require('picocolors')


// Vamos a obtener un listado de los ficheros, ejemplo basico 



fs.readdir('.', (err, files) =>  {
    if (color.red(err)) {
        console.log('Error al leer el directorio: ', err)
        return;
    }

    files.forEach(file => {
  
    })
  

})
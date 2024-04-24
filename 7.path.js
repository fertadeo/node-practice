const path = require('node:path')

// path sirve para gestionar rutas, crearlas, recuperar extensiones, etc. 

//cada OS tiene las barras de rutas distintas, podemos saber
// utilizando path.sep

console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//adquirir nombre del fichero
const baseName = path.basename('tmp/fer/password.txt')
console.log(baseName)

//si quiero quitar la extension

const filename = path.basename('tmp/fer/password.txt', '.txt')
console.log(filename)

//obtener extension 
const extension = path.extname('myimage.super.jpg')
console.log(extension)

const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    res.setHeader('Content-type', 'text/html; charset=utf8')
    if (req.url === '/') {
        req.statusCode = 200 //ok
        res.end('Bienvenidos a mi página de inicio, probando...')
    } else if (req.url === '/contacto') {
        req.statusCode = 200 //ok
        res.end('<h1>Sitio de contacto</h1>')
    } else if (req.url === '/image.png') {
        fs.readFile('./dog.png', (err, data) => {
          if (err) {
            res.statusCode = 500
            res.end('<h1>Imagen no encontrada...</h1>')
          }  else {
            res.setHeader('Content-type', 'image/png')
            res.end(data)
          }
        })
   
    } else {
        res.statusCode = 404 //Not found
        res.end('<h1> 404, Página no encontrada...</h1>')
    }
    console.log("request recibida")
}
const server = http.createServer(processRequest)

//Se utiliza poner 0 en el primer parametro para que busque cualquier puerto disponible, por lo 
// que siempre dara un numero distinto. 
// server.listen(0, () => {
//     console.log(`server escuchando en el puerto http://localhost:${server.address().port}`)
// })


//Aqui le decimos que lea el puerto 1234 por defecto. 
server.listen(desiredPort, () => {
    console.log(`server escuchando en el puerto http://localhost:${desiredPort}`)
})

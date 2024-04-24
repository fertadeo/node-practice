const http = require('node:http')

const server = http.createServer((req, res) => {
console.log("request recibida")
res.end('Hola Mundo')
})

server.listen(0, () => {
    console.log(`server escuchando en el puerto http://localhost:${server.address().port}`)
})



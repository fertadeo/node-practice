const http = require('node:http')

const processRequest = (req, res) => {

}

const server = http.createServer(processRequest)
server.listen(1234, () => {
    console.log('Server listening on port http:localhost:1234')
})

//TODO #1 CREAR METODOS DE LA API 
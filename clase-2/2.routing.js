const http = require('node:http')
// common JS => modulos clasicos de node
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statuscode = 404
          res.setHeader = ('Content-Type', 'text/html; charset=utf8')
          return res.end('<h1>404...</h1>')
      }
    case 'POST': 
      switch (url) {
        case '/pokemon/':
          let body = ''
          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          } )

          req.on('end', () => {
            const data = JSON.parse(body)
            // Llamamos a una base de datos para guardar la info
            res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'} )
            res.end(JSON.stringify(data))
          })

          break; 
      }
  }
}

const server = http.createServer(processRequest)
server.listen(1234, () => {
  console.log('Server listening on port http:localhost:1234')
})

// TODO #1 CREAR METODOS DE LA API

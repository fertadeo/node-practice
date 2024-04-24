//Pequeña aplicacion para obtener un puerto disponible

const net = require('node:net')

function findAvailablePort (desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.adress() 
            server.close(() => {
                resolve(port)
            })
            server.on('error', (err) => {
                if (err.code === 'EADDRINUSE') {
                    resolve(findAvailablePort(0).then(port => resolve(port)))
                } else {
                    reject(err)
                }
            })
    })
        
        resolve(0)

    })
}
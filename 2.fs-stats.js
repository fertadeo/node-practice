const fs = require('node:fs')

const stats = fs.statSync('./package-lock.json')

console.log(stats)

//o mejor

console.log(
    stats.isFile(),
    stats.isDirectory(), 
    stats.size
)
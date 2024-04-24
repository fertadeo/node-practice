import { readFile } from 'node:fs'


const text = readFile('./text.txt', 'utf8' ,(err, data) => {
    console.log(data)
})

console.log('Cosas que pasan mientras leemos el archivo 1')

const textSec = readFile('./textSec.txt', 'utf8' ,(err, data) => {
    console.log(data)
})


console.log('Cosas que pasan mientras leemos el archivo 2')

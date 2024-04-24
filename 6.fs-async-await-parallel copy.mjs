
import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./text.txt', 'utf8'),
    readFile('./textSec.txt', 'utf8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto', secondText)
})
import { readFile } from 'node:fs'


const text = readFile('./text.txt', 'utf8' ,(err, data) => {
    console.log(data)
})




import { readFile } from 'node:fs/promises'


async function init () {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./text.txt', 'utf8')
    console.log('primer texto:', text)
    console.log('-----> Pasan cosas mientras se lee el primer archivo...')
    
    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./textSec.txt', 'utf8')
    console.log('segundo texto', secondText)

}

init()
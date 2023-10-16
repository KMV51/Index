console.log('hello world :P')

global.luckyNum = '23'
console.log(global.luckyNum)


const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
    console.log('yummy yum yum')
})

eventEmitter.emit('lunch');

const { readFile, readFileSync } = require('fs');
const txt = readFileSync('./hello.txt', 'utf8');
console.log()
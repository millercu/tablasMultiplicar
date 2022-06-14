const {crearArchivo} = require('./helpers/multiplicar')
const {argv} = require('./config/yargs')

console.clear();

/*
console.log(argv)
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=')
*/

//const base = 8;

crearArchivo(argv.base, argv.l, argv.h);


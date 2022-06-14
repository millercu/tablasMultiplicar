const argv = require('yargs')
                        .option('b',{
                         alias:'base',
                         type: 'number',
                         describe: "Es la base de multiplicar"
                        })
                        .option('l',{
                            alias:'listar',
                            type: 'boolean',
                            default: false,
                            describe: "Muestra las tablas de multiplicar"
                           })
                        .option('h',{
                            alias:'hasta',
                            type: 'number',
                            default:10,
                            describe: "Dice hasta que numero se multiplica"
                           })
                        .check((argv, options) => {
                            if(isNaN(argv.base)){
                                throw 'La base debe ser un numero'
                            }
                            else{
                                return true;
                            }
                        })
                        .argv;

module.exports = {
    argv
}
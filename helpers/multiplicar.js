const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, listar, h) =>{

        
    


    let salida = '';
    let consola = '';

    for(i=0; i<=h; i++){
        salida += `${base} X ${i} = ${base*i}\n`
        consola += `${base} X ${i} = ${base*i}\n`.rainbow
       
    }
    

    if(listar === true){
        console.log("====================".green)
        console.log(`TABLA DEL ${base}`.red)
        console.log("====================".green)


        console.log(consola)
    }
        fs.writeFileSync(`./tablas/tabla-del${base}.txt`, salida)
        console.log(`tabla-del${base}.txt creado con exito`.bgGreen)
    
}

module.exports = {
   crearArchivo
}
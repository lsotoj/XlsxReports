const fs = require('fs');
console.log('HOLA, SI FUNCIONA')

function leer(ruta, cb) {
    fs.readFile(ruta, 'utf8', (err, data) => {
        console.log(data)
    });
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if(err) {
            console.log('No he podido escribirlo');
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar (ruta, cb) {
    fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.xlsx', 'Soy un archivo nuevo en excel', console.log);
// leer(__dirname + '/archivo1.xlsx');
borrar(__dirname + '/archivo1.txt', console.log)
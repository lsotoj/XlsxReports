const csv = require('csvtojson');
const fs = require('fs');
const validacion = require('./assets/validacion');

//DECLARTION OF THE STREAM
// let readableStream = fs.createReadStream(__dirname + '/parque.csv');
// readableStream.setEncoding('UTF8');
// readableStream.pipe(csv());
// console.log(readableStream);

const csvFilePath = __dirname + '/parque.csv';
csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    jsonObj.forEach(elemento => {
        console.log(elemento);
    });
    validacion(jsonObj[0]);
    // fs.writeFile('File.txt', jsonObj, function (err) {
    //     if (err) throw err;
    //     console.log('file created');
    // });
});


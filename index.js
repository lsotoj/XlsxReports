const csv = require("csvtojson");
const fs = require("fs");
const validacion = require("./assets/validacion");
const filling = require("./assets/fill.js");
let validos = [];

//DECLARTION OF THE STREAM
// let readableStream = fs.createReadStream(__dirname + '/parque.csv');
// readableStream.setEncoding('UTF8');
// readableStream.pipe(csv());
// console.log(readableStream);

const csvFilePath = __dirname + "/parque.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    jsonObj.forEach((elemento) => {
      const resultado = validacion(elemento);
      validos.push(resultado);
    });
  });
console.log(validos);
const noNull = validos.filter((clienteObj) => {
  clienteObj != null;
});

console.log(noNull);

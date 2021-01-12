console.time();
const csv = require("csvtojson");
const fs = require("fs");
const validacion = require("./assets/validacion");
const filling = require("./assets/fill.js");
let elementosValidos = [];
let arregloFinal = [];
let countValidos;
let parqueTotal;

//DECLARTION OF THE STREAM
// let readableStream = fs.createReadStream(__dirname + '/parque.csv');
// readableStream.setEncoding('UTF8');
// readableStream.pipe(csv());
// console.log(readableStream);
const csvFilePath = __dirname + "/parque.csv";

function Validadora(elemento) {
  const resultado = validacion(elemento);
  if (resultado != null) {
    countValidos = elementosValidos.push(resultado);
  }
}

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    parqueTotal = jsonObj.length;
    jsonObj.forEach(Validadora);
  })
  .then(() => {
    arregloFinal = elementosValidos.map(filling);
    //console.log(arregloFinal);
  });
console.timeEnd();

"use strict";
console.time();
const csv = require("csvtojson");
const fs = require("fs");
const Excel = require("exceljs");
const validacion = require("./assets/validacion");
const filling = require("./assets/fill.js");
const json2xls = require("json2xls");
let elementosValidos = [];
let arregloFinal = [];
let countValidos;
let parqueTotal;

//DECLARTION OF THE STREAM
// let readableStream = fs.createReadStream(__dirname + '/parque.csv');
// readableStream.setEncoding('UTF8');
// readableStream.pipe(csv());
// console.log(readableStream);
const csvFilePath = __dirname + "/parque1.csv";

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
    console.log(arregloFinal.length);
  })
  .then(() => {
    let xls = json2xls(arregloFinal);
    fs.writeFile("parqueInstalado.xlsx", xls, "binary", (err) => {
      if (err) {
        console.log("WriteFile: ", err);
      }
      console.log("File is saved");
    });
  })
  .then(console.timeEnd());

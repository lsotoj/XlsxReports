"use strict";
const csv = require("csvtojson");
const fs = require("fs");
const Excel = require("exceljs");
const express = require("express");
const bodyParser = require("body-parser");
const validacion = require("./assets/validacion");
const filling = require("./assets/fill.js");
const json2xls = require("json2xls");
const formidable = require("formidable");

let elementosValidos = [];
let arregloFinal = [];
let countValidos;
let parqueTotal;
const csvFilePath = __dirname + "/parque1.csv";

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/uploadFiles.html");
});

app.post("/files", (req, res) => {
  let form = formidable.IncomingForm();

  form
    .parse(req, (err, fields, files) => {})
    .on("fileBegin", (name, file) => {
      file.path = "./uploads/" + file.name;
    })
    .on("file", (name, file) => {
      console.log("Uploaded file!");
      res.sendFile(__dirname + "/public/uploadSuccess.html");
    });
});

function validadora(elemento) {
  const resultado = validacion(elemento);
  if (resultado != null) {
    countValidos = elementosValidos.push(resultado);
  }
}

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    parqueTotal = jsonObj.length;
    console.log(parqueTotal);
    jsonObj.forEach(validadora);
  })
  .then(() => {
    arregloFinal = elementosValidos.map(filling);
    console.log(arregloFinal.length);
  })
  .then(() => {
    console.log(arregloFinal);
  });

// app.listen(3000, () => {
//   console.log("server escuchando en el puerto 3000");
// });

function validando(objeto) {
  let pasa = true;

  for (x in objeto) {
    if (
      (objeto[x] === "Alpha") |
      (objeto[x] === "JDSU") |
      (objeto[x] === "VEEX")
    ) {
      pasa = false;
    }
  }

  if (pasa) {
    // console.log('pasa');
    return objeto;
  } else {
    // console.log('no pasa');
    return null;
  }
}
module.exports = validando;

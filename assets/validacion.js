function validando(objeto) {
  let pasa = true;

  for (x in objeto) {
    if (
      (objeto[x] === "Alpha") |
      (objeto[x] === "JDSU") |
      (objeto[x] === "VEEX") |
      (objeto[x] === "Cheetah Technologies") |
      (objeto[x] === "Alpha Technologies") |
      (objeto[x] === "AM Communications")
    ) {
      pasa = false;
    }
  }

  if (pasa) {
    return objeto;
  } else {
    return null;
  }
}
module.exports = validando;

const firmwares = {
  "CGA0101D-P15-5-A000-c7410r5713-180201-CCA": {
    marca: "Technicolor",
    modelo: "CGA0101",
  },
  "CGA0101D-P15-5-A000-c7410r5714-180914-CCA": {
    marca: "Technicolor",
    modelo: "CGA0101",
  },
  "CGA0101D-P15-5-A000-c7410r5713-171108-CCA": {
    marca: "Technicolor",
    modelo: "CGA0101",
  },
  "CGA0101D-P15-5-A000-c7410r5714-181109-CCA": {
    marca: "Technicolor",
    modelo: "CGA0101",
  },
  "CGA0101D-P15-5-A000-c7420r5714-191031-CCA": {
    marca: "Technicolor",
    modelo: "CGA0101",
  },
  "CGA0112D-P15-5-A000-c7400r5714-190109-CCA": {
    marca: "Technicolor",
    modelo: "CGA0112",
  },
  "CGA0112D-P15-5-A000-c7400r5714-190520-CCA": {
    marca: "Technicolor",
    modelo: "CGA0112",
  },
  "CGA0112D-P15-5-A000-c7400r5714-190927-CCA": {
    marca: "Technicolor",
    modelo: "CGA0112",
  },
  "D3928SL2-P15-13-A386-c3420r55105-170503a-CCA": {
    marca: "Technicolor",
    modelo: "DPC3928SL2",
  },
  "D3928SL2-P15-13-A386-c3420r55105-180206a-CCA": {
    marca: "Technicolor",
    modelo: "DPC3928SL2",
  },
  "ST80.30.02": {
    marca: "Thomson",
    modelo: "DWG855",
  },
  "ST80.30.00.T1": {
    marca: "Thomson",
    modelo: "DWG855",
  },
  "ST80.30.06": {
    marca: "Thomson",
    modelo: "DWG855",
  },
  "SB5100-2.3.1.6-SCM01-NOSH": {
    marca: "Motorola Corporation",
    modelo: "SB5100",
  },
  "SBG900-2.1.9.7-SCM00-NOSH": {
    marca: "Motorola",
    modelo: "SBG900",
  },
  "SBG900-2.1.15.0-SCM00-NOSH": {
    marca: "Motorola",
    modelo: "SBG900",
  },
  "SBV5121-17.7.3-SCM-10-SHPC": {
    marca: "Motorola Corporation",
    modelo: "SBV5121",
  },
  "STD3.30.01": {
    marca: "Technicolor",
    modelo: "TC7110.02",
  },
  "STD3.30.02": {
    marca: "Technicolor",
    modelo: "TC7110.02",
  },
  "STFA.30.01": {
    marca: "Technicolor",
    modelo: "TC7300.B0M",
  },
  "STFA.31.01": {
    marca: "Technicolor",
    modelo: "TC7300.B0M",
  },
  "STEE.30.05.T1": {
    marca: "Technicolor",
    modelo: "TC8305.TLG",
  },
  "STEE.30.03": {
    marca: "Technicolor",
    modelo: "TC8305.TLG",
  },
  "STEE.30.02.T1": {
    marca: "Technicolor",
    modelo: "TC8305.TLG",
  },
  "STEE.30.05": {
    marca: "Technicolor",
    modelo: "TC8305.TLG",
  },
  "1.1.4": {
    marca: "Kaonmedia",
    modelo: "CG2001-AN21V",
  },
  "1.1.6": {
    marca: "Kaonmedia",
    modelo: "CG2001-AN21V",
  },
  "1.0.3": {
    marca: "Kaonmedia",
    modelo: "CG2001-AN21V",
  },
  "1.0.8": {
    marca: "Kaonmedia",
    modelo: "CG2001-AN21V",
  },
  "1.1.3": {
    marca: "Kaonmedia",
    modelo: "CG2200-ED52J",
  },
};

function llenado(clienteObj) {
  if (clienteObj.marca === "No Marca" || clienteObj.modelo === "No Modelo") {
    return {
      ...clienteObj,
      ...firmwares[clienteObj.firmware],
    };
  }

  return clienteObj;
}
module.exports = llenado;

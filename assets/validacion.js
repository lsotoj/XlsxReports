function validando(objeto) {
   for(x in objeto) {
       if(objeto[x] === 'Alpha') {
           console.log('no pasan');
           return null;
       }
   }

   console.log('si pasan');
   return objeto;
    // const {marca, cliente, virtual, velocidad, capa, seguridad,} = objeto;
    // if(marca === 'AM Communications' || cliente, virtual,velocidad, capa, seguridad === 'Alpha') {
    //     console.log('no');
    //     return null;
    // } else {
    //     console.log('si');
    //     return objeto
    // }
}

module.exports = validando;
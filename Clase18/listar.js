let profesionales = require("./profesionales");
module.exports = function () {
    for (let i=0; i<profesionales.length;i++){
    let hab = profesionales[i].estaHabilitado==true ? "ok" : "inactivo";
    console.log(`ID ${profesionales[i].id} ${hab}, ${profesionales[i].especialidad}, ${profesionales[i].nombre}, valor consulta $${profesionales[i].honorarioConsulta.toFixed(2)}, puntaje: ${profesionales[i].puntaje}`)
  }
}
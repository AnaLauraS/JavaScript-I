//1. Obtener el listado de posibles participantes
let fs=require("./lect-scr");
let participantes=fs.leerJson("autos");

//2. Crear un objeto literal que represente la carrera
let carrera = {
    autos: participantes,
    autosporTanda: 6,
    autosHabilitados: function () {return participantes.filter(e=>e.sancionado==false)},
    listarAutos: function (array) {array.forEach(element => {console.log(`Piloto: ${element.piloto}, patente: ${element.patente}, velocidad: ${element.velocidad}km/h, peso en kg: ${element.peso}, estado: ${element.sancionado==true? "sancionado":"habilitado"}`)});},
    buscarporPatente: function(patente) {
        let encontrado=this.autos.find(auto => auto.patente === patente)
        return this.listarAutos([encontrado])},
    filtrarporCilindrada: function (cil){return this.listarAutos(this.autosHabilitados().filter(e=>e.cilindrada<=cil))},
    ordenarporVelocidad: function(array){return this.listarAutos(array.sort((a,b)=>a.velocidad-b.velocidad))},
    habilitarVehiculo: function (str){
        let encontrado=this.autos.filter(e=>e.patente==str);
        encontrado.forEach(e=>e.sancionado=false);
        this.listarAutos(encontrado);
        fs.escribirJson("autos",this.autos)},
    generarTanda: function (cil, peso) {
        let filtro1=this.autosHabilitados().filter(e=>e.cilindrada<=cil);
        let filtro2=filtro1.filter(e=>e.peso<=peso);
        filtro2.length<=this.autosporTanda? this.ordenarporVelocidad(filtro2) : "Excede la tanda";
        return filtro2},
    pesoPromedio: function (cil,peso) {let resultado=this.generarTanda(cil,peso)
    let num = resultado.reduce((acum,e)=>(acum=+e.peso)/resultado.length);
    console.log(num)}
}    

pesoPromedio(2000,1600)
const fs=require('fs');

const leerJson = function (nombre){
   let auto= fs.readFileSync (nombre, 'utf-8');
   return JSON.parse(auto);
}

// console.log(leerJson("AUTOS.json"));

const escribirJson = function (nombre, datos) {
    
    let autos= leerJson (nombre);
    autos.push(datos);
    autos=JSON.stringify(autos);
    fs.writeFileSync(nombre,autos);
  };

  let objeto = {
    marca: "propia",
    modelo: "nuestro",
    anio: 1990,
    precio: 652770,
    patente: "otro999",
    vendido: false
   }

   // escribirJson("AUTOS.json", objeto);

   const jsonHelper = {
    leerJson,
    escribirJson
  };

  module.exports=jsonHelper;
let prueba=require('./Clase16');
//console.log(prueba.leerJson ("AUTOS.json"))

let concesionaria={
    autos: prueba.leerJson("AUTOS.json"),
    agregarAuto: function (marca, modelo, anio, precio, patente){
        let nuevo={
            marca,
            modelo,
            anio,
            precio,
            patente,
            vendido: false
        }
        prueba.escribirJson("AUTOS.json", nuevo);
    },
    
}


//concesionaria.agregarAuto("dodge", "ram", 2022, 78000, "jdsfhjd");
//console.log(concesionaria.autos)
const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A
let otro= () =>
    arrayProfesionales.map ((elemento) =>
        console.log(elemento.nombre + " - " + elemento.especialidad));
otro();
//B
let otro2=()=>arrayProfesionales.map((elemento)=>elemento.honorarioConsulta=elemento.honorarioConsulta*1.05);
console.log(arrayProfesionales);
//C
let profesionalesDeshabilitados=()=>arrayProfesionales.filter((elemento)=>elemento.estaHabilitado==false);
console.log(profesionalesDeshabilitados());
//D
let profesionalesHabilitados=()=>arrayProfesionales.filter((elemento)=>elemento.estaHabilitado==true);
console.log(profesionalesHabilitados());
//E
let arquitecto=()=>arrayProfesionales.filter((elemento)=>elemento.especialidad=="Arquitecto");
console.log(arquitecto());
//F
let otro3 =()=>arrayProfesionales.map((profesionalesDeshabilitados)=>profesionalesDeshabilitados.estaHabilitado=true);
console.log(otro3());
//G 
let cantidadTotalConsultas=()=>arrayProfesionales.reduce((acum, elemento)=>acum + elemento.cantidadConsultas, 0);
console.log(cantidadTotalConsultas());
//H 
let otro4=()=>arrayProfesionales.forEach((elemento)=>
console.log("nombre: " + elemento.nombre + ". especialidad: " + elemento.especialidad + ". recaudación: " + elemento.cantidadConsultas*elemento.honorarioConsulta));
otro4();

// Clase20

let primerosCincoProfesionales = arrayProfesionales.slice(0,5);
console.log(primerosCincoProfesionales);

let nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}

arrayProfesionales.splice(14,1,nuevoProfesional);
console.log(arrayProfesionales);

let ordenarProfesionales = arrayProfesionales.sort(function(a, b) {
    return a.honorarioConsulta - b.honorarioConsulta;
});
console.log(ordenarProfesionales);

console.log(arrayProfesionales.find((profesional)=> profesional.identificador === 15));



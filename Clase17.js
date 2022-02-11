let pulgadasAcm=pulgadas=>pulgadas*2.54;
let aURL=str=>console.log(`http://www.${str}.com`);
let adm=str=>console.log(`${str}!!`);
let edadPerro=edad=>edad*7;
let valorHora=sueldo=>sueldo/40;
let calculadorIMC=(altura,peso)=>peso/(altura**2);
let mayus=str=>str.toUpperCase();
let tipo=param=>console.log(typeof param);
let circ=radio=>Math.PI*(radio**2);

//callbacks

const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
function buscarNombre(nombre){
for(let i=0; i<nombres.length; i++){
    if (nombres[i]==nombre){
        console.log(`El nombre ${nombre} fue encontrado`)
    }
}
}

buscarNombre('Martin');

function mostrarResultado (str){
if (str==""){
    return "Nombre no encontrado"
} else {
    return "El nombre fue encontrado"
}
}


function buscarNom (nombre,callback){
    let nom="";
    for(let i=0; i<nombres.length; i++){
        if (nombres[i]==nombre){
            nom=nombre
        }
    }
    return callback(nom);
}

console.log(buscarNom('luis',mostrarResultado))
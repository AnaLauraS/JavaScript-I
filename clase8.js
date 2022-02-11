let edad=21 //(el número es a modo de ejemplo, podes cambiarlo o crear otras pruebas)
if (edad<0) {
    console.log ("Error, edad inválida. Por favor ingrese un número válido.")
}
else if (edad<18) {
console.log("No puede pasar al bar.")
}
else if(edad<21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}
else if (edad=21) {
    console.log("Puede pasar al bar y tomar alcohol. ¡Bienvenido a los 21 años!")
}
else{
console.log("Puede pasar al bar y tomar alcohol.")
}

if (edad%2!==0){
    console.log("¿Sabías que tu edad es impar?")
}

// funcion total a pagar
let valor, vehiculo, litrosConsumidos,total

function totalAPagar(vehiculo,litrosConsumidos){
    switch (vehiculo){
        case "coche": 
        if (litrosConsumidos<25){
            return 86*litrosConsumidos+50
        }else{
            return 86*litrosConsumidos+25
        }
        case "moto": 
        if (litrosConsumidos<25){
            return 70*litrosConsumidos+50
        }else{
            return 70*litrosConsumidos+25
        }
        case "autobus": 
        if (litrosConsumidos<25){
            return 55*litrosConsumidos+50
        }else{
            return 55*litrosConsumidos+25
        }
    }
}

console.log (totalAPagar("moto",100))

// Local de sandwiches
let valorSand, valorPan
function precio(sand,pan,queso,tomate,lechuga,cebolla,mayonesa,mostaza) {
    
switch (sand){
    case "pollo": valorSand=150;
    break;
    case "carne": valorSand=200;
    break;
    case "veggie": valorSand=100;
    break;
}
switch (pan){
    case "blanco": valorPan=50;
    break;
    case "negro": valorPan=60;
    break;
    case "s/gluten": valorPan=75;
    break;
}

let valor1 = queso==true? 20 : 0;
let valor2 = tomate==true? 15 : 0;
let valor3 = lechuga==true? 10 : 0;
let valor4 = cebolla==true? 15 : 0;
let valor5 = mayonesa==true? 5 : 0;
let valor6 = mostaza==true? 5 : 0;

return valorPan+valorSand+valor1+valor2+valor3+valor4+valor5+valor6
}

console.log(precio("pollo","negro",true,false,false,true,true,true))

// BONUS: número secreto
function secreto (num) {
    let sec=Math.round(Math.random()*10);
    if (num==sec){
        console.log ("Adivinaste")
    }else{
        console.log(`volvé a intentarlo, el numero era ${sec}`)
    }
}
secreto(5)

// Bonus: paracaidas
function abrirParacaidas (velocidad, altura) {
    if (velocidad<1000 && altura>=2000 && altura<3000){
        console.log ("Hora de abrir el paracaidas si no querés morir")
    } else {
        console.log ("No estoy seguro si es muy tarde o si aun tenes tiempo de disfrutar de la adrenalina")
    }
}
abrirParacaidas(79,230)

// BONUS: traductor
let str;
str="pelota";
switch (str) {
    case "casa": resp="house";
    break;
    case "perro": resp="dog";
    break;
    case "pelota": resp="ball";
    break;
    case "árbol": resp="tree";
    break;
    case "genio": resp="genius";
    break;
    default: resp="Palabra ingresada incorrecta";
    break;
}

console.log(resp)

//BONUS: valoración de películas
let string = "mmm"
let resp2
function valorar(string) {
    switch (string){
        case "Muy mala": resp2="Nos pone muy triste tu calificación";
        break;
        case "Mala": resp2="Parece que algo hicimos bien";
        break;
        case "Mediocre": resp2="Bueno, tenemos mucho que mejorar";
        break;
        case "Buena": resp2="Genial! Aun podemos ser mejores";
        break;
        case "Muy buena": resp2="Somos lo más gracias a vos";
        break;
        default: resp2="Ingresaste un valor inválido";
        break;
    }
    return resp2;
}
console.log (valorar(string)+". Gracias por participar")
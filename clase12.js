const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanador(a, b) {
let puntosPrimerParticipante = 0;
let puntosSegundoParticipante = 0;

for (let i=0; i<3; i++){
    if (a[i]>b[i]) {
        puntosPrimerParticipante++
    }if (a[i]<b[i]){
        puntosSegundoParticipante++
    }
}

let ganador;
if (puntosPrimerParticipante<puntosSegundoParticipante) {
    ganador="Bob";
}if (puntosPrimerParticipante>puntosSegundoParticipante) {
    ganador="Alicia";
} else {
    ganador="ninguno: hubo un empate";
}

return ganador
}

console.log("El ganador es " + encontrarGanador(alicia, bob) );

// Ejercicios extras!!

function digitalHouse(num1, num2) {
let a =[]
for (let i=0; i<100;i++){
    a[i]=i+1
}
for (i=0;i<100;i++){
    if (a[i]%num1==0 && a[i]%num2==0){
        a[i]="Digital House"
    } if (a[i]%num1==0){
        a[i]="Digital"
    } if (a[i]%num2==0){
        a[i]="House"
    } 
}
return a
}
console.log(digitalHouse(6,15));

function sumArray (array) {
    let suma=0
    for (i=0;i<array.length;i++){
        suma= suma+array[i]
    }
    return suma
}
console.log(sumArray(alicia))
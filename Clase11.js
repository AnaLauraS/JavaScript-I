// bonus
let partA = [5,8,4,9,5]
let partB = [8,7,8,6,8]
let partC = [7,5,10,8,3]
let participantes = [partA, partB, partC]
let nombres=["participanteA","participanteB","participanteC"]
// mejor promedio y mayor puntaje.
function puntajePromedio(part) {
    let suma=0;
    for (let i=0; i<part.length; i++) {
        suma=suma+part[i];
    }
    return suma/part.length;
}
function puntajeMayor(part) {
    let punt=0
    for (let i=0; i<part.length; i++) {
        if (part[i]>punt){
            punt=part[i];
        } else {
            punt=punt
        }
    }
    return punt
}

function competencia(participantes) {
    let promedios=[]
    for (let i=0; i<3; i++){
        promedios[i]=puntajePromedio(participantes[i])
    }
    let a;
    let resultado=0;

    for (i=0; i<3; i++)
    if (promedios[i]>resultado){
        a=i
        resultado=promedios[i]
    }
    console.log (`El ganador por promedio es el ${nombres[a]}`)

    let mayores=[]
    for (i=0; i<3; i++){
        mayores[i]=puntajeMayor(participantes[i])
    }
    a=0
    resultado=0;

    for (i=0; i<3; i++)
    if (mayores[i]>resultado){
        a=i
        resultado=mayores[i]
    }
    console.log (`El ganador por mayor puntaje es el ${nombres[a]}`)
}

competencia(participantes)

function pulgadas_a_cm (pulgadas){
    return pulgadas*2.54
}
console.log(pulgadas_a_cm(56))

function a_url (string) {
    return "www."+string+".com"
}
console.log(a_url('una_pagina_web'))

function otro_st (string){
    return "¡"+string+"!"
}
console.log(otro_st('loros'))

function edad_perro (num){
    return num*7
}
console.log(edad_perro(12))

function hora_trabajo (valor){
    return valor/40
}
console.log(hora_trabajo(450000))

function calculadorIMC (alt, peso) {
    return Math.round (peso/(alt**2))
}
console.log(calculadorIMC(1.78, 78))

// parte más compleja

function a_mayus (string) {
    return string.toUpperCase()
}
console.log(a_mayus('no se qué decir'))

function tipo (ing) {
    return typeof ing
}
console.log (tipo(true))

function circ (radio) {
    return Math.round (Math.PI*radio)
}
console.log(circ(12))




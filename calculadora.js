function sumar(num1, num2){
    return num1+num2
}
function restar(num1, num2){
    return num1-num2
}
function multiplicar(num1, num2){
    return num1*num2
}
function dividir(num1, num2){
    return num1/num2
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

console.log(`funcion suma de 67 y 78 es ${sumar(67, 78)}`)
console.log(`funcion resta de 67 y 78 es ${restar(67, 78)}`)
console.log(`funcion multiplicación de 67 y 78 es ${multiplicar(67, 78)}`)
console.log(`funcion división de 67 y 78 es ${dividir(67, 78)}`)
console.log(`funcion división de 67 y 0 es ${dividir(67, 0)}`)


function cuadradoDeUnNumero (num){
    return multiplicar(num,num)
}
function promedioDeTresNumeros(num1,num2,num3){
    return dividir(sumar(sumar(num1, num2),num3),3)
}
function calcularPorcentaje (num, por) {
    return multiplicar(dividir(por, 100),num)
}
function GeneradorDePorcentaje (num1,num2) {
    return multiplicar(dividir(num1,num2),100)
}

console.log(`cuadrado de 300 es ${cuadradoDeUnNumero(300)}`)
console.log(`promedio de 5 89 y 78 es ${promedioDeTresNumeros(5,89,78)}`)
console.log(`porcentaje de 300 15 es ${calcularPorcentaje(300,15)}`)
console.log(`porcentaje de 2 de 200 es ${GeneradorDePorcentaje(2,200)}%`)
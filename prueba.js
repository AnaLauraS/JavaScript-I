let uno =1
let dos=uno
uno=2
console.log(uno, dos)

// Mensaje con variables
let nombre, edad, ciudad

nombre = "ana", edad=31, ciudad="bs as"
console.log("me llamo " + nombre + " y tengo " + edad + " años.")

// Calculadora de edad

let edad1=42
let edad2=65

function dias (edad){
    return edad*365
}

console.log("edad1 corresponde a "+dias (edad1)+" dias y la edad2 corresponde a "+dias(edad2)+" dias")
// Suma de valores

let num1 =454
let num2 = 246
let resultado = num1 + num2

console.log("suma de num1 y num2 es igual a " + resultado )

// Calculador de abastecimiento de por vida

let edad_max=80
let chocolates=0.1 // son 100 gramos al día
let cuenta=(edad_max-edad)*365*chocolates

console.log("vas a necesitar "+cuenta+" kilos de chocolate para que te alcancen hasta los " + edad_max + " años.")

let precio_kilo=1400
console.log("y necesitas entonces $"+precio_kilo*cuenta + " (sin ajustar por inflacion!!)")

// vacaciones

let dias_vacas=4
let presupuesto=30000
let comidas=3*dias_vacas

console.log("Podes gastar hasta $"+presupuesto/comidas+" en cada comida para que te alcance la plata durante los "+dias_vacas+" días de viaje")

// IMC
function imc (peso, alt){
   return peso/(alt*alt)
}

let peso= [83.5, 80.1]
let alt= [1.7,1.76]
let prepaga=true
let indice_masa

let nombres=["nicolas lopez", "esteban piazza"]
let edades=[27, 28]

for (let i = 0; i < 2; i++) {

console.log(nombres[i]+" tiene "+edades[i]+" años y su indica de masa corporal es de "+imc(peso[i], alt[i]))
}


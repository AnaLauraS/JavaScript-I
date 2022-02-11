let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (nom) {
        for (let i=0; i<arrayCuentas.length; i++){
            if (arrayCuentas[i].titularCuenta==nom){
                return arrayCuentas[i]
            }
        }
    },
    deposito: function (nom,cant) {
        for (let i=0; i<arrayCuentas.length; i++){
            if (arrayCuentas[i].titularCuenta==nom){
                arrayCuentas[i].saldoEnPesos+=cant;
                console.log (`Depósito realizado, su nuevo saldo es: ${arrayCuentas[i].saldoEnPesos}`)
            }
        }
    },
    extraccion: function (nom,cant) {
        for (let i=0; i<arrayCuentas.length; i++){
            if (arrayCuentas[i].titularCuenta==nom){
                let prueba=arrayCuentas[i].saldoEnPesos-cant
                if (prueba<0) {
                    console.log (`Fondos insuficientes`);
                }else{
                    arrayCuentas[i].saldoEnPesos=prueba
                    console.log (`Depósito realizada, su nuevo saldo es: ${arrayCuentas[i].saldoEnPesos}`)
                }
            }
        }
    }
}

console.log(banco.consultarCliente("Jacki Shurmer"));
banco.deposito("Jacki Shurmer", 6);
banco.extraccion("Jacki Shurmer", 200)
banco.extraccion("Jacki Shurmer", 20000)

// BONUS TRACK

function propiedadUnica (array, str) {
    let resultado = []

const keys = Object.keys(arrayCuentas[0]);
let valor;
for (i=0;i<keys.length;i++){
    if (keys[i]=str){
        valor=keys[i]
    }
}
for (i=0; i<array.length; i++) {
    resultado.push(array[i].valor)
}

return resultado
}

console.log(propiedadUnica(arrayCuentas,"tipoDeCuenta"));


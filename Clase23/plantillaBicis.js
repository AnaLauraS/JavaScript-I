const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const archivo=require("./jsonHelper");

let carrera={
    bicicletas: archivo.leerJson("bicicletas"),
    bicicletasPorTanda: 4,
    listarBicicletas: function (a) {a.forEach(e=>{console.log(`Ciclista: ${e.ciclista}, marca: ${e.marca}, rodado: ${e.rodado}, peso: ${e.peso} kg, largo ${e.largo} cm, estado: ${e.dopaje? "inhabilitado":"habilitado"}.`)})},
    ciclistasHabilitados: function () {return this.bicicletas.filter(e=>e.dopaje==false)},
    buscarPorId: function (id) {return this.bicicletas.find(e=>e.id==id)},
    filtrarPorPeso: function (peso) {return this.ciclistasHabilitados().filter(e=>e.peso<=peso)},
    ordenarPorRodado: function () {return this.bicicletas.sort((a,b)=>a.rodado-b.rodado)},
    largoPromedio: function () {console.log(`El largo promedio de todas las bicicletas es ${this.bicicletas.reduce((acum,elem)=>acum+elem.largo,0)/this.bicicletas.length} cm.`)},
    aumentarPeso: function (kg, id) {
        let buscado = this.buscarPorId(id);
        if(buscado !== undefined){
            buscado.peso = buscado.peso + kg ;
            archivo.escribirJson('./bicicletas',this.bicicletas);
            return buscado;}},
    generarTanda: function (rod, peso) {
        let array=this.ciclistasHabilitados().filter(e=>e.rodado<=rod && e.peso>=peso);
        return array.slice(0,this.bicicletasPorTanda);},
    calcularPodio: function (rod, peso) {
        let podio = this.generarTanda(rod,peso).sort((a,b)=>b.puntaje-a.puntaje);
        console.log(`El ganador es: ${podio[0].ciclista}, con un puntaje de ${podio[0].puntaje}. \nEl segundo puesto es para ${podio[1].ciclista}, con un puntaje de ${podio[1].puntaje}. \nEl tercer puesto es para ${podio[2].ciclista}, con un puntaje de ${podio[2].puntaje}.`)
    }
};

/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
carrera.listarBicicletas(carrera.bicicletas);
console.log(o);

console.log(v, oo + " .E.");
carrera.listarBicicletas(carrera.ciclistasHabilitados());
console.log(o);

console.log(v, oo + " .F.");
carrera.listarBicicletas([carrera.buscarPorId(5)]);
console.log(o);

console.log(v, oo + " .G.");
carrera.listarBicicletas(carrera.filtrarPorPeso(8.3));
console.log(o);

console.log(v, oo + " .H.");
carrera.listarBicicletas(carrera.ordenarPorRodado());
console.log(o);

console.log(v, oo + " .I.");
carrera.largoPromedio();
console.log(o);

console.log(v, oo + " .J. ");
carrera.listarBicicletas([carrera.aumentarPeso(1,1)]);
console.log(o);

console.log(v, oo + " .K. ");
carrera.listarBicicletas(carrera.generarTanda(25,8));
console.log(o);

console.log(v, oo + " .L. ");
carrera.calcularPodio(25,8);
console.log(o);

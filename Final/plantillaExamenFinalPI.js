const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Ana Laura Siczkowski";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const archivo=require("./jsonHelper");
// A
let gestionDePeliculas = {

// B
    peliculas: archivo.leerJson("peliculas"),

// C
    listarPeliculas: function (array) {array.forEach(a => {console.log(`${a.titulo}, de ${a.director}. Duración: ${a.duracion} minutos, ${a.genero}, (${a.calificacionIMDB} / 10 en IMDB)`)
    });},

// D
    buscarPorId: function (id) {return this.peliculas.find(e=>e.id===id)},

// E
    peliculasPorGenero: function (genero) {return this.peliculas.filter(e=>e.genero===genero)},

// F
    filtrarPorCalificacion: function (min,max) {return this.peliculas.filter(e=>e.calificacionIMDB>=min && e.calificacionIMDB<=max)},

// G
    ordenarPorDuracion: function () {return this.peliculas.sort((a,b)=>b.duracion-a.duracion)},

// H
    duracionPromedio: function () {console.log(`El promedio de duración de las películas es de: ${this.peliculas.reduce((acum,elem)=>acum+elem.duracion,0)/this.peliculas.length} minutos.`)},

// I
    modificarGeneroPorId: function (id, genero) {
        let encontrado=this.buscarPorId(id);
        if (encontrado) {
            encontrado.genero=genero;
        }
        archivo.escribirJson("peliculas",this.peliculas);
        console.log (encontrado);
    }
};
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorId(2));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPorGenero("Drama"));
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorCalificacion(5,8));
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion());
console.log(o);

console.log(v, oo + " .H. Duracion");
gestionDePeliculas.duracionPromedio();
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
gestionDePeliculas.modificarGeneroPorId(2,"Otro");
console.log(o);

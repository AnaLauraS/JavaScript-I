
let appProfesionales = {
  profesionales: require("./profesionales"),
// B 
  listarProfesionales: require("./listar"),
// C
  filtrarMejoresPuntajes: require("./filtrar"),
// D
  buscarPorID: require("./buscar"),
// E
  habilitarProfesional: require("./habilitar"),
// F
  corregirNombres: require("./corregir"),
};



appProfesionales.listarProfesionales(this.profesionales);


const filtro = appProfesionales.filtrarMejoresPuntajes();
appProfesionales.listarProfesionales(filtro);



const prof1=appProfesionales.buscarPorID(1);
appProfesionales.listarProfesionales([prof1]);


const hab=appProfesionales.habilitarProfesional(2);
appProfesionales.listarProfesionales(hab);

const lista=appProfesionales.corregirNombres();
appProfesionales.listarProfesionales(lista);

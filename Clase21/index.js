const archivos = require("./lecturaEscritura");
let arrayDepartamentos = archivos.leerJson("departamentos");



let inmobiliaria = {
departamentos: arrayDepartamentos,

listarDepartamentos: function(array){
  array.forEach(x => {
	 	console.log(`
				El id: ${x.id}
				Precio del alquiler: ${x.precioAlquiler}
				Disponible: ${x.disponible ? "Esta disponible" : "No hay lugar"}
				Ambientes: ${x.ambientes}
  	`)})
 
},
buscarPorId: function(id){ 
		this.departamentos.find(this.departamentos.id===id)
},
departamentosNoDisponibles: function () {return this.departamentos.filter(elem=>elem.disponible==false)},
departamentosDisponibles: function () { return this.departamentos.filter(elem=>elem.disponible==true)},
filtrarPorAmbientes: function (num) {return this.departamentos.filter(elem=>elem.ambientes>=num)},
filtrarPorPrecio: function (num) {return this.departamentosDisponibles().filter(elem=>elem.precioAlquiler<=num)},
rebajarPrecioAlquiler: function (num) {
	this.departamentosDisponibles().forEach(elem=>elem.precioAlquiler=elem.precioAlquiler*(1-(num/100)))
	archivos.escribirJson("departamentos", this.departamentos);
	return this.departamentosDisponibles();
	},
calcularRecaudacion: function () {return this.departamentosNoDisponibles().reduce((sum,item)=>sum=+item.precioAlquiler)},
ordenarPorPrecio: function (array) {
		return array.sort((a,b)=>a.precioAlquiler-b.precioAlquiler)
	}	
} // fin app

console.log(inmobiliaria.rebajarPrecioAlquiler(10))

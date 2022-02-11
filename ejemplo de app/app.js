fetch("departamentos.json")
.then(response => response.json())
.then(arrayDepartamentos => {



    let inmobiliaria = {
        departamentos: arrayDepartamentos,
        //2C
        buscarPorId: function (id) {
            return this.departamentos.find((departamento) => departamento.id === id);
        },
        //2D
        departamentosNoDisponibles: function () {
            return this.departamentos.filter(
            (departamento) => !departamento.disponible
            );
        },

        //2E
        departamentosDisponibles: function () {
            return this.departamentos.filter((departamento) => departamento.disponible);
        },

        //2F
        filtrarPorAmbientes: function (ambientes) {
            return this.departamentos.filter(
            (departamento) => departamento.ambientes >= ambientes
            );
        },

        //2G
        filtrarPorPrecio: function (precio) {
            return this.departamentos.filter(
            (departamento) => departamento.precioAlquiler <= precio
            );
        },

        //2H
        rebajarPrecio: function (porcentaje) {
            const deptosDisponibles = this.departamentosDisponibles();
            deptosDisponibles.forEach((departamento) => {
            departamento.precioAlquiler -=
                departamento.precioAlquiler * (porcentaje / 100);
            });
            return deptosDisponibles;
        },
        //2I
        calcularRecaudacion: function(){
            if(this.departamentosNoDisponibles()){
            return this.departamentosNoDisponibles().reduce((acc,depto)=>acc + depto.precioAlquiler , 0)
            }
        },

        //2I
        ordenarPorPrecio: function(arrayDepartamentos = this.departamentos){
            return arrayDepartamentos.sort((a,b) => a.precioAlquiler-b.precioAlquiler)
        }
        };

        // DOM
        // =================================================================
        let seccion = document.querySelector("section")

        // construyo el HTML
        // Crear una función con modelo de HTML que represente cada depto (usar h2, ul li, strong)
        

        // ACCIONES
        // Con el DOM debemos crear cada acción de la app para que se vea reflejada en el Front
        // Recordá que debes primero que nada seleccionar que etiqueta del HTML seleccionar para que ejecute la acción al hacer click, luego de eso de tomar el array (si corresponde) u objeto que retorne o string y poder replicar cada depto devuelto al HTML.
		document.querySelector('#todos').addEventListener('click',function(e){
							// prevenir comportamiento predeterminado del enlace
              e.preventDefault()
							let departamentos = inmobiliaria.departamentos
              seccion.innerHTML = ''
              departamentos.forEach(departamento => {
                 seccion.innerHTML += crearDepto(departamento)
              })
        })

				// Alquilados
				document.querySelector('#alquilados').addEventListener('click',function(e){
							// prevenir comportamiento predeterminado del enlace
              e.preventDefault()
							let departamentos = inmobiliaria.departamentosNoDisponibles()
              seccion.innerHTML = ''
              departamentos.forEach(departamento => {
                 seccion.innerHTML += crearDepto(departamento)
						})
        })

				// Buscar por ID
				document.querySelector('#buscar button').addEventListener('click',function(e){
							// prevenir comportamiento predeterminado del enlace
              e.preventDefault()
              let id = parseInt( document.querySelector('#buscar input').value )
              let departamento = inmobiliaria.buscarPorId(id)					
							seccion.innerHTML = ''
							seccion.innerHTML = crearDepto(departamento)
							

        })

				 // Disponibles
        document.querySelector("a#disponibles").addEventListener("click", (evento) => {
             evento.preventDefault()
            let array = inmobiliaria.departamentosDisponibles()
            seccion.innerHTML = ""
            array.forEach(obj => {     
                seccion.innerHTML += crearDepto(obj)
            })
        })

				// Rebajar precio por porcentaje
        document.querySelector("#aplicarRebaja button").addEventListener("click", (evento) => {
            evento.preventDefault()
            let campo = document.querySelector("input[name=porcentaje]")
            let valor = parseInt(campo.value)
            let array = inmobiliaria.rebajarPrecio(valor)
            
            seccion.innerHTML = "" 
            array.forEach(obj => {     
                seccion.innerHTML += crearDepto(obj)
            })
        })

				 // Filtrar por precio 
        document.querySelector("#precioMax button").addEventListener("click", (evento) => {
            evento.preventDefault()
            let campo = document.querySelector("input[name=precio]")
            let valor = parseInt(campo.value)
            let array = inmobiliaria.filtrarPorPrecio(valor)
            
            seccion.innerHTML = "" 
            array.forEach(obj => {     
                seccion.innerHTML += crearDepto(obj)
            })
        })

				 // Ordenar por precio
        document.querySelector("a#ordenarPorPrecio").addEventListener("click", (evento) => {
            evento.preventDefault()
            let array = inmobiliaria.ordenarPorPrecio()
            seccion.innerHTML = ""
            array.forEach(obj => {     
                seccion.innerHTML += crearDepto(obj)
            })
        })

				// Filtrar por cantidad de ambientes
        document.querySelector("#ambientes button").addEventListener("click", (evento) => {
            evento.preventDefault()
            let campo = document.querySelector("input[name=cantidad]")
            let valor = parseInt(campo.value)
            let array = inmobiliaria.filtrarPorAmbientes(valor)
            
            seccion.innerHTML = "" 
            array.forEach(obj => {     
                seccion.innerHTML += crearDepto(obj)
            })
        })

				// Ver recaudación
        document.querySelector("a#recaudacion").addEventListener("click", (evento) => {
            evento.preventDefault()
            let recaudacion = inmobiliaria.calcularRecaudacion()
            let etiquetaTexto = document.querySelector("h3")

            etiquetaTexto.innerHTML = `Actualmente se recauda por mes $ ${recaudacion}`
        })

})
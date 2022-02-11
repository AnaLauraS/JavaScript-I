let fs = require('fs');

//Leemos el objeto JSON
const autosJSON = fs.readFileSync('./Autos/autos.json','utf-8');

//Lo convertimos en un objeto literal para poder manipularlo
const listadoAutos = JSON.parse(autosJSON);

let carrera = {
    autos : listadoAutos,
    autosPorTanda : 6,
    autosHabilitados : function(){
        let habilitados = this.autos.filter(auto => auto.sancionado === false);
        return habilitados;
    },
    listarAutos : function(arrayAutos){
        for(auto of arrayAutos){
            auto.sancionado ? console.log(`Piloto: ${auto.piloto}, patente: ${auto.patente}, velocidad: ${auto.velocidad}km/h, peso en kg: ${auto.peso}, estado: sancionado.`) : console.log(`Piloto: ${auto.piloto}, patente: ${auto.patente}, velocidad: ${auto.velocidad}km/h, peso en kg: ${auto.peso}, estado: habilitado.`);
        }
    },
    buscarPorPatente : function(nroPatente){
        let autoBuscado = this.autos.find(auto => auto.patente === nroPatente);
        return autoBuscado;
    },
    filtrarPorCilindrada : function(cilindradaMax){
        let segunCilindrada = this.autosHabilitados().filter(auto => auto.cilindrada < cilindradaMax);
        return segunCilindrada;
    },
    ordenarPorVelocidad: function(){
        let orden = this.autos.sort(function(a,b){
            return a.velocidad - b.velocidad;
        })

        return orden;
    },
    habilitarVehiculo: function(nroPatente){
        let buscado = this.buscarPorPatente(nroPatente);
        if(buscado !== undefined){
            buscado.sancionado = false;
            let nuevo = JSON.stringify(this.autos);
            fs.writeFileSync('./Autos/autos.json',nuevo);
            return buscado;
        }
    },
    generarTanda: function(cilMax,pesoMax){
        let habilitados = this.autosHabilitados();
        let tanda = habilitados.filter(auto=> auto.cilindrada <= cilMax && auto.peso<= pesoMax);
        return tanda;

    },
    pesoPromedio: function(cilMax,pesoMax){
        let tanda = this.generarTanda(cilMax,pesoMax);
        let subtotal = 0;
        for(auto of tanda){
            subtotal += auto.peso;
        }
        let promedio = subtotal/(tanda.length)
        return `El peso promedio es ${promedio}`;
    },
    listarPodio: function(tanda){
        
    let podio = tanda.sort(function(autoA,autoB){
        return autoB.puntaje - autoA.puntaje;
    }).slice(0,3);
    console.log(`El ganador es: ${podio[0].piloto}, con un puntaje de ${podio[0].puntaje}.
    El segundo puesto es para ${podio[1].piloto}, con un puntaje de ${podio[1].puntaje}.
    El tercer puesto es para ${podio[2].piloto}, con un puntaje de ${podio[2].puntaje}.`);
    }
}

//C

//console.log(carrera.autosHabilitados());

//D

//carrera.listarAutos(carrera.autos);

//E

//console.log(carrera.buscarPorPatente('CJK912'));

//F

//console.log(carrera.filtrarPorCilindrada(1600));

//G

//console.log(carrera.ordenarPorVelocidad());

//H

//console.log(carrera.habilitarVehiculo('RGB159'));

//I

//console.log(carrera.generarTanda(1600,2000));

//J
//console.log(carrera.pesoPromedio(1600,2000));

//K
//carrera.listarPodio(carrera.generarTanda(1600,2000));





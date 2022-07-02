const TipoRecursoTecnologico = require('./TipoRecursoTecnologico')

class RecursoTecnologico{
    constructor(
        numeroRT,
        fechaAlta,
        imagenes,
        periodicidadMantenimientoPrev,
        duracionMatenimientoPrev,
        fraccionHorarioTurnos
    ){
        this.numeroRT = numeroRT
        this.fechaAlta = fechaAlta
        this.imagenes = imagenes
        this.periodicidadMantenimientoPrev = periodicidadMantenimientoPrev
        this.duracionMatenimientoPrev = duracionMatenimientoPrev
        this.fraccionHorarioTurnos = fraccionHorarioTurnos
    }

    mostrarRT(){
        return this.numeroRT
    }

    habilitar(){

    }

    conocerCategoria(){

    }

    conocerCaracteristicaRecurso(){

    }

    miModeloYMarca(){

    }

    nuevoMantenimientoPreventivo(){

    }

    misTurnosDisponibles(){

    }

    buscarTipoRT(nombre, descripcion){
        //5
        let tipoRT = new TipoRecursoTecnologico(nombre, descripcion)
        return tipoRT.getNombre()
    }
}

module.exports = RecursoTecnologico
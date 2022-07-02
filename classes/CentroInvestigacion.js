const TipoRecursoTecnologico = require('../classes/TipoRecursoTecnologico')

class CentroInvestigacion{
    constructor(
        nombre,
        sigla,
        direccion,
        edificio,
        piso,
        coordenadas,
        telefonosContacto,
        correoElectronico,
        numeroResolucionCreacion,
        fechaResolucionCreacion,
        reglamento,
        caracteristicasGenerales,
        fechaAlta,
        tiempoAntelacionReserva,
        fechaBaja,
        motivoBaja
    )
    {
        this.nombre = nombre
        this.sigla = sigla
        this.direccion = direccion
        this.edificio = edificio
        this.piso = piso
        this.coordenadas = coordenadas
        this.telefonosContacto = telefonosContacto
        this.correoElectronico = correoElectronico
        this.numeroResolucionCreacion = numeroResolucionCreacion
        this.fechaResolucionCreacion = fechaResolucionCreacion
        this.reglamento = reglamento
        this.caracteristicasGenerales = caracteristicasGenerales
        this.fechaAlta = fechaAlta
        this.tiempoAntelacionReserva = tiempoAntelacionReserva
        this.fechaBaja = fechaBaja
        this.motivoBaja = motivoBaja
    }

    buscarDatosRTSeleccionado(){
        //17. metodo no esta en el dc
        //let tipoRT = TipoRecursoTecnologico('nombre', 'descripcion')
        //tipoRT.buscarDatosRTSeleccionado()
    }

    mostrarCI(){
        return this.nombre
    }

    miDirectorActual(){
        return 
    }

    misDirectores(){

    }

    estoyActivo(){

    }

    misCientificos(){

    }

    misCientificosActivos(){

    }

    misRecursosTecnologicos(){

    }

    miBaja(){
        
    }

}

module.exports = CentroInvestigacion
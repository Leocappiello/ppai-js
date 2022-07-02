const RecursoTecnologico = require('../classes/RecursoTecnologico')
const PantallaRegistrarReservaTurnoRT = require('./PantallaRegistrarReservaTurnoRT')
const Estado = require('../classes/Estado')
const CentroInvestigacion = require('../classes/CentroInvestigacion')

class GestorRegistrarReservaTurnoRT {
    constructor() {

    }

    tomarOpcionReservarTurnoRT() {
        //3
        this.buscarTipoRT()
    }

    buscarTipoRT() {
        //4
        let recurso = new RecursoTecnologico('numeroRT',
            'fechaAlta',
            'imagenes',
            'periodicidadMantenimientoPrev',
            'duracionMatenimientoPrev',
            'fraccionHorarioTurnos')
        recurso.buscarTipoRT()

        //7
        let pantalla = new PantallaRegistrarReservaTurnoRT()
        pantalla.mostrarTipoRTParaSeleccion()
    }

    tomarSeleccionTipoRT() {
        //10
        this.buscarEstadoDisponible()
    }

    buscarEstadoDisponible() {
        //11
        let estado = new Estado()
        //

        //
        for (const property in obj) {
            estado.esAmbitoRT()
        }

        //12
        for (const property in obj) {
            estado.esDisponible()
        }

        //13
        this.buscarCI()
    }

    buscarCI() {
        //14
        let centroInvestigacion = new CentroInvestigacion()
        for (const property in obj) {
            centroInvestigacion.mostrarCI()
        }

        //15
        this.buscarDatosRTSeleccionadoSegunCI()
    }

    buscarDatosRTSeleccionadoSegunCI() {
        //16
        let centro = new CentroInvestigacion(
            'nombre',
            'sigla',
            'direccion',
            'edificio',
            'piso',
            'coordenadas',
            'telefonosContacto',
            'correoElectronico',
            'numeroResolucionCreacion',
            'fechaResolucionCreacion',
            'reglamento',
            'caracteristicasGenerales',
            'fechaAlta',
            'tiempoAntelacionReserva',
            'fechaBaja',
            'motivoBaja')
        for (const property in obj) {
            centro.buscarDatosRTSeleccionado()
        }
    }

    verificarPerteneceCI() {

    }

    obtenerTurnosRTSeleccionado() {

    }

    getFechaActual() {

    }

    getHoraActual() {

    }

    tomarTurnoSeleccionado() {

    }

    buscarDatosTurnoSeleccionado() {

    }

    tomarOpcionNotificacionSelec() {

    }

    tomarConfirmacionReserva() {

    }

    registrarReservaParaCientifico() {

    }

    actualizarEstadoTurno() {

    }

    finCU() {

    }
}

module.exports = GestorRegistrarReservaTurnoRT
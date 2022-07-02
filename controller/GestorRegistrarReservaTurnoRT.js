const data = require('../data/data.json')
const RecursoTecnologico = require('../classes/RecursoTecnologico')
const PantallaRegistrarReservaTurnoRT = require('./PantallaRegistrarReservaTurnoRT')
const Estado = require('../classes/Estado')
const CentroInvestigacion = require('../classes/CentroInvestigacion')
const TipoRecursoTecnologico = require('../classes/TipoRecursoTecnologico')

class GestorRegistrarReservaTurnoRT {
    constructor() {

    }

    tomarOpcionReservarTurnoRT() {
        console.log('3. se va a llamar a buscar los rts')
        //3
        return this.buscarTipoRT()
    }

    buscarTipoRT() {
        console.log('4. se crea un rt por cada obj')
        
        let arrTiposRT = [] 

        for (let elem in data) {
            let rt = new RecursoTecnologico(
                'numeroRT',
                'fechaAlta',
                'imagenes',
                'periodicidadMantenimientoPrev',
                'duracionMatenimientoPrev',
                'fraccionHorarioTurnos'
            )
            //5.
            arrTiposRT.push(rt.buscarTipoRT(data[elem], data[elem]))
        }

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
        estado.esAmbitoRT()
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
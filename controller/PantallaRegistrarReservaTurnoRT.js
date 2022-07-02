const GestorRegistrarReservaTurnoRT = require("./GestorRegistrarReservaTurnoRT")

class PantallaRegistrarReservaTurnoRT {
    constructor(

    ) {

    }

    opcionReservarTurnoRT() {
        //1
        this.habilitarVentana()
    }

    habilitarVentana() {
        //2
        let gestor = new GestorRegistrarReservaTurnoRT()
        gestor.tomarOpcionReservarTurnoRT()
    }

    mostrarTipoRTParaSeleccion() {
        //8
        this.tomarSeleccionTipoRT()
    }

    tomarSeleccionTipoRT() {
        //9
        let gestor = new GestorRegistrarReservaTurnoRT()
        gestor.tomarSeleccionTipoRT()
    }

    mostrarDatosRTSeleccionado() {

    }

    tomarRTAUtilizar() {

    }

    mostrarTurnosParaSeleccion() {

    }

    tomarTurnoSeleccionado() {

    }

    solicitarOpcionNotificacion() {

    }

    solicitarConfirmacionDeReserva() {

    }

}

//
pantalla = new PantallaRegistrarReservaTurnoRT()
pantalla.opcionReservarTurnoRT()

//
module.exports = PantallaRegistrarReservaTurnoRT
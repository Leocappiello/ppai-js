const GestorRegistrarReservaTurnoRT = require("./GestorRegistrarReservaTurnoRT")

class PantallaRegistrarReservaTurnoRT {
    constructor(

    ) {

    }

    opcionReservarTurnoRT() {
        console.log('1. se abre ventana y se toca opcion')
        //1
        let a = this.habilitarVentana()
        console.log(a)
    }

    habilitarVentana() {
        console.log('2. se habilita ventana y se llama gestor para traer rts')
        //2
        let gestor = new GestorRegistrarReservaTurnoRT()
        return gestor.tomarOpcionReservarTurnoRT()
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
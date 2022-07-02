class Estado {
    constructor(
        nombre,
        descripcion,
        ambito,
        esReservable,
        esCancelable
    )
    {
        this.nombre = nombre
        this.descripcion = descripcion
        this.ambito = ambito
        this.esReservable = esReservable
        this.esCancelable = esCancelable
    }

    mostrarEstado(){
        return this.nombre
    }

    esAmbitoRT(){
        //12
        return this.ambito
    }

    esDisponible(){

    }

    esAmbitoReserva(){

    }

    esReservado(){
        
    }
}

module.exports = Estado
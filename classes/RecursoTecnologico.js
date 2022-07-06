const dataRT = require('../data/dataRT.json')
//
const Modelo = require('../classes/Modelo')
const CambioEstadoRT = require('./CambioEstadoRT')

class TipoRecursoTecnologico {
    constructor(nombre, descripcion) {
        this.nombre = nombre
        this.descripcion = descripcion
    }

    getNombre() {
        //6
        return this.nombre
    }

    buscarDatosRTSeleccionado(recursos) {
        let recursosID = []
        Array(dataRT[recursos]).map((elem) => { recursosID.push(Object(elem).id) })

        //console.log(recursosID, 'id de cada recurso');
        
        //19.
        let { id,
            name,
            marca,
            type,
            features,
            nroInventory,
            fechaAlta,
            respTecRecurso,
            disponibility,
            pathImages } = dataRT[recursos]

        let rt = new RecursoTecnologico(
            id,
            name,
            new Modelo(dataRT[recursos].name, dataRT[recursos].marca).mostrarModelo(),
            marca,
            type,
            features,
            new CambioEstadoRT('fechaHoraDesde', 'fechaHoraHasta').getEstadoActual(),
            nroInventory,
            fechaAlta,
            respTecRecurso,
            disponibility,
            pathImages,
        )

        return rt
    }

    mostrarCategoria() {

    }
}

class RecursoTecnologico {
    constructor(
        id,
        name,
        modelo,
        marca,
        type,
        features,
        estado,
        nroInventory,
        fechaAlta,
        respTecRecurso,
        disponibility,
        pathImages,
    ) {
        this.id = id,
        this.name = name,
        this.modelo = modelo,
        this.marca = marca,
        this.type = type,
        this.features = features,
        this.estado = estado,
        this.nroInventory = nroInventory,
        this.fechaAlta = fechaAlta,
        this.respTecRecurso = respTecRecurso,
        this.disponibility = disponibility,
        this.pathImages = pathImages
    }

    buscarTipoRT(nombre, descripcion) {
        //5
        let tipoRT = new TipoRecursoTecnologico(nombre, descripcion)
        return tipoRT.getNombre()
    }

    mostrarRT() {
        return this.numeroRT
    }

    habilitar() {

    }

    conocerCategoria() {

    }

    conocerCaracteristicaRecurso() {

    }

    miModeloYMarca() {

    }

    nuevoMantenimientoPreventivo() {

    }

    misTurnosDisponibles() {

    }
}

module.exports = {
    RecursoTecnologico, 
    TipoRecursoTecnologico
}
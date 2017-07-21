export function read(req, res) {

    const jsonResponse = {
        _id: 'id',
        nombreCientifico: 'Enterolobium schomburgkii (Benth.) Benth.',
        especies: 'Enterolobium schomburgkii (Benth.) Benth.',
        recurso: {
            _id: 'id',
            nombre: 'Nombre del recurso',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        verbatimName: 'Enterolobium schomburgkii',
        publicador: {
            _id: 'id',
            nombre: 'Nombre del publicador',
        },
        basisOfRecord: 'Observación humana',
        registro: {
            baseRegistro: 'Base del registro',
            codigoColeccion: 'Código de coleccíon',
            codigoInstitucion: 'Código de la institucíon',
        },
        occurrence: {
            associatedReferences: 'Associated References',
            numeroCatalogo: 'Número de catálogo',
            conteoIndividual: 'Conteo individual',
            registradoPor: 'Registrado por',
        },
        evento: {
            id: 'id',
            fechaEvento: '2017-01-15T15:28:39.000+0000',
        },
        taxon: {
            reino: 'Reino',
            filo: 'Filo',
            clase: 'Clase',
            orden: 'Orden',
            familia: 'Familia',
            genero: 'Género',
            epitetoEspecifico: 'Epíteto especifico',
            nombreEspecifico: 'Nombre científico',
            rank: 'Rank',
            vernacularName: 'Vernacular name',
        },
        ubicacion: {
            precisionCoordenada: 'Precisión de coordenada',
            pais: 'País',
            codigoPais: 'Código de país',
            departamento: 'Departamento',
            latitudDecimal: 'Latitud decimal',
            longitudDecimal: 'Longitud decimal',
            geodeticDatum: 'Geodetic Datum',
            localidad: 'Localidad',
            stateProvince: 'State province',
        },
        licencia: 'Lincencia',
        modificado: '2017-01-15T15:28:39.000+0000',
    }

    return res.status(200).json(jsonResponse);

}
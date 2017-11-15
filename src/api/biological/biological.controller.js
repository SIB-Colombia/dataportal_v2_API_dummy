var http = require('http');

export function list(req, res) {
  http.get('http://www.gbif.org/api/occurrence/search?country=CO&limit=5', (response) => {
    let body = '';
    response.on('data', (d) => {
      body += d
    });
    response.on('end', () => {
      const json = JSON.parse(body);
//console.log(json)
      return res.status(200).json({ results:json });
    });
  });
}

export function read(req, res) {

  //console.log("El id es: ", req.params.id);
  http.get('http://api.gbif.org/v1/occurrence/'+req.params.id, function(response) {
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      //console.log("La respuesta es ", body);
      var json = JSON.parse(body);


      http.get('http://api.gbif.org/v1/dataset/'+json.datasetKey, function(response2) {
        var body2 = '';
        response2.on('data', function(d) {
            body2 += d;
        });
        response2.on('end', function() {
          var jsonDataset = JSON.parse(body2);


          //console.log(JSON.stringify(json, null, 2));
          //console.log(JSON.stringify(jsonDataset, null, 2));
/*

json.publishingOrgKey": "f9b67ad0-9c9b-11d9-b9db-b8a03c50a862",
json.publishingCountry": "US",
json.protocol": "DIGIR_MANIS",
json.lastCrawled": "2015-07-30T18:43:04.566+0000",
json.lastParsed": "2014-05-29T10:40:16.694+0000",
json.crawlId": 5,
json.extensions": {},
json.basisOfRecord": "PRESERVED_SPECIMEN",
json.taxonKey": 7192874,
json.kingdomKey": 1,
json.phylumKey": 44,
json.classKey": 212,
json.orderKey": 1448,
json.familyKey": 5289,
json.genusKey": 5228473,
json.speciesKey": 5228474,
json.species": "Colibri coruscans",
json.genericName": "Colibri",

json.taxonRank": "SUBSPECIES",

json.issues": [],
json.lastInterpreted": "2017-02-17T15:44:22.397+0000",

json.identifiers": [],
json.facts": [],
json.relations": [],

json.catalogNumber": "66625",

json.locality": "RAMIREZ",
json.gbifID": "215569465",
json.collectionCode": "ORN"
*/


          const jsonResponse = {
            dataset: jsonDataset,
            occurrence: json,/*{
              occurrenceID: json.key,
              catalogNumber: json.datasetKey,
              occurrenceRemarks: 'XX Comentarios del registro biológico',
              recordNumber: 'XX Número de registro',
              recordedBy: 'XX Registrado por',
              organismID: 'XX ID del individuo',
              individualCount: 'XX Número de individuos',
              sex: 'XX Sexo',
              lifeStage: 'XX Etapa de vida',
              reproductiveCondition: 'XX Condición reproductiva',
              behavior: 'XX Comportamiento',
              establishmentMeans: 'XX Medios de establecimiento',
              occurrenceStatus: 'XX Estado del registro biológico',
              preparations: 'XX Preparaciones',
              disposition: 'XX Disposición',
              otherCatalogNumbers: 'XX Otros números de catálogo',
              associatedMedia: 'XX Medios asociados',
              associatedReferences: 'XX Referencias asociadas',
              associatedSequences: 'XX Secuencias asociadas',
              associatedTaxa: 'XX Taxones asociados',
              basisOfRecord: json.basisOfRecord,
              institutionCode: json.institutionCode,
              collectionCode: 'XX Código de la colección',
              type: 'XX Tipo',
              modified: 'XX Modificado',
              language: 'XX Idioma',
              license: json.license,
              rightsHolder: 'XX Titular de los derechos',
              accessRights: 'XX Derechos de acceso',
              bibliographicCitation: 'XX Citación bibliográfica',
              references: 'XX Referencias',
              institutionID: 'XX ID de la institución',
              collectionID: 'XX ID de la colección',
              datasetID: 'XX ID del conjunto de datos',
              datasetName: 'XX Nombre del conjunto de datos',
              ownerInstitutionCode: 'XX Código de la institución propietaria',
              informationWithheld: 'XX Información retenida',
              dataGeneralizations: 'XX Generalización de los datos',
              dynamicProperties: 'XX Propiedades dinámicas',
              eventID: 'XX ID del evento',
              parentEventID: 'XX ID del evento parental',
              samplingProtocol: 'XX Protocolo de muestreo',
              sampleSizeValue: 'XX Tamaño de la muestra',
              sampleSizeUnit: 'XX Unidad del tamaño',
              samplingEffort: 'XX Esfuerzo de muestreo',
              eventDate: 'XX Fecha del evento',
              eventTime: 'XX Hora del evento',
              startDayOfYear: 'XX Día inicial del año',
              endDayOfYear: 'XX Día final del año',
              year: 'XX Año',
              month: 'XX Mes',
              day: 'XX Día',
              verbatimEventDate: 'XX Fecha original del evento',
              habitat: 'XX Hábitat',
              fieldNumber: 'XX Número de campo',
              fieldNotes: 'XX Notas de campo',
              eventRemarks: 'XX Comentarios del evento',
              locationID: 'XX ID de la ubicación',
              higherGeographyID: 'XX ID de la geografía superior',
              higherGeography: 'XX Geografía superior',
              continent: json.continent,
              waterBody: 'XX Cuerpo de agua',
              islandGroup: 'XX Grupo de islas',
              island: 'XX Isla',
              country: json.country,
              countryCode: json.countryCode,
              stateProvince: json.stateProvince,
              county: 'XX Municipio',
              municipality: 'XX Centro poblado / Cabecera municipal',
              locality: 'XX Localidad',
              verbatimLocality: 'XX Localidad original',
              verbatimElevation: 'XX Elevación original',
              minimumElevationInMeters: 'XX Elevación mínima en metros',
              maximumElevationInMeters: 'XX Elevación máxima en metros',
              verbatimDepth: 'XX Profundidad original',
              minimumDepthInMeters: 'XX Profundidad mínima en metros',
              maximumDepthInMeters: 'XX Profundidad máxima en metros',
              minimumDistanceAboveSurfaceInMeters: 'XX Distancia mínima de la superficie metros',
              maximumDistanceAboveSurfaceInMeters: 'XX Distancia máxima de la superficie metros',
              locationAccordingTo: 'XX Ubicación de acuerdo con',
              locationRemarks: 'XX Comentarios de la ubicación',
              verbatimCoordinates: 'XX Coordenadas originales',
              verbatimLatitude: '4.6138575',
              verbatimLongitude: '-74.0665862',
              verbatimCoordinateSystem: 'XX Sistema original de coordenadas',
              verbatimSRS: 'XX SRS original',
              decimalLatitude: json.decimalLatitude,
              decimalLongitude: json.decimalLongitude,
              geodeticDatum: 'XX Datum geodésico',
              coordinateUncertaintyInMeters: 'XX Incertidumbre de las coordenadas en metros',
              coordinatePrecision: 'XX Precisión de las coordenadas',
              pointRadiusSpatialFit: 'XX Ajuste espacial del radio-punto',
              footprintWKT: 'XX WKT footprint',
              footprintSRS: 'XX SRS footprint',
              footprintSpatialFit: 'XX Ajuste espacial de footprint',
              georeferencedBy: 'XX Georreferenciado por',
              georeferencedDate: 'XX Fecha de georreferenciación',
              georeferenceProtocol: 'XX Protocolo de georreferenciación',
              georeferenceSources: 'XX Fuentes de georreferenciación',
              georeferenceVerificationStatus: 'XX Estado de la verificación de la georreferenciación',
              georeferenceRemarks: 'XX Comentarios de la georreferenciación',
              taxonID: 'XX ID del taxón',
              scientificNameID: 'XX ID del nombre científico',
              acceptedNameUsageID: 'XX ID del nombre aceptado usado',
              parentNameUsageID: 'XX ID del nombre parental usado',
              originalNameUsageID: 'XX ID del nombre original usado',
              nameAccordingToID: 'XX ID del nombre de acuerdo con',
              namePublishedInID: 'XX ID del nombre publicado en',
              taxonConceptID: 'XX ID del concepto del taxón',
              scientificName: json.scientificName,
              acceptedNameUsage: 'XX Nombre aceptado usado',
              parentNameUsage: 'XX Nombre parental usado',
              originalNameUsage: 'XX Nombre original usado',
              nameAccordingTo: 'XX Nombre de acuerdo con',
              namePublishedIn: 'XX Nombre publicado en',
              namePublishedInYear: 'XX Nombre publicado en el año',
              higherClassification: 'XX Clasificación superior',


              kingdom: json.kingdom,
              phylum: json.phylum,
              class: json.class,
              order: json.order,
              family: json.family,
              genus: json.genus,
              subgenus: json.subgenus,
              specificEpithet: json.specificEpithet,
              infraspecificEpithet: json.infraspecificEpithet,
              taxonRank: json.taxonRank,
              verbatimTaxonRank: 'XX Categoría original del taxón',
              scientificNameAuthorship: 'XX Autoría del nombre científico',
              vernacularName: 'XX Nombre común',
              nomenclaturalCode: 'XX Código nomenclatural',
              taxonomicStatus: 'XX Estado taxonómico',
              nomenclaturalStatus: 'XX Estado nomenclatural',
              taxonRemarks: 'XX Comentarios del taxón',
              identificationID: 'XX ID de la identificación',
              identifiedBy: 'XX Identificado por',
              dateIdentified: 'XX Fecha de identificación',
              identificationReferences: 'XX Referencias de la identificación',
              identificationVerificationStatus: 'XX Estado de la verificación de la identificación',
              identificationRemarks: 'XX Comentarios de la Identificación',
              identificationQualifier: 'XX Calificador de la identificación',
              typeStatus: 'XX Estado del tipo',
              organismQuantity: 'XX Cantidad del Organismo',
              organismQuantityType: 'XX Tipo de Cantidad del Organismo',
              organismName: 'XX Nombre del organismo',
              organismScope: 'XX Alcance del organismo',
              associatedOrganisms: 'XX Organismos asociados',
              organismRemarks: 'XX Comentarios del organismo',
              previousIdentifications: 'XX Identificaciones previas',
              associatedOccurrences: 'XX Registros biológicos asociados',
              materialSampleID: 'XX ID de muestra del ejemplar',
              geologicalContextID: 'XX ID del contexto geológico',
              earliestEonOrLowestEonothem: 'XX Eón temprano o eonotema inferior',
              latestEonOrHighestEonothem: 'XX Eón tardío o eonotema superior',
              earliestEraOrLowestErathem: 'XX Era temprana o eratema inferior',
              latestEraOrHighestErathem: 'XX Era tardía o eratema superior',
              earliestPeriodOrLowestSystem: 'XX Periodo temprano o sistema inferior',
              latestPeriodOrHighestSystem: 'XX Periodo tardío o sistema superior',
              earliestEpochOrLowestSeries: 'XX Época temprana o serie inferior',
              latestEpochOrHighestSeries: 'XX Época tardía o serie superior',
              earliestAgeOrLowestStage: 'XX Edad temprana o piso inferior',
              latestAgeOrHighestStage: 'XX Edad tardía o piso superior',
              lowestBiostratigraphicZone: 'XX Zona bioestratigráfica inferior',
              highestBiostratigraphicZone: 'XX Zona bioestratigráfica superior',
              lithostratigraphicTerms: 'XX Términos litoestratigráficos',
              group: 'XX Grupo',
              formation: 'XX Formación',
              member: 'XX Miembro',
              bed: 'XX Capa',
            },
            */
            measurementOrFact: {
              measurementID: 'XX Identificador',
              measurementType: 'XX Tipo',
              measurementValue: 'XX Valor',
              measurementAccuracy: 'XX Precisión',
              measurementUnit: 'XX Unidad de medida',
              measurementDeterminedBy: 'XX Determinado por',
              measurementDeterminedDate: 'XX Fecha',
              measurementMethod: 'XX Método',
              measurementRemarks: 'XX Comentarios',
            },
            resourceRelationship: {
              resourceRelationshipID: 'XX ID de relación',
              resourceID: 'XX ID del recurso',
              relatedResourceID: 'XX ID del recurso relacionado',
              relationshipOfResource: 'XX Relación de recursos',
              relationshipAccordingTo: 'XX Relación de acuerdo a',
              relationshipEstablishedDate: 'XX Fecha de relación',
              relationshipRemarks: 'XX Comentarios',
            },
            multimedia: {
              type:'XX Tipo',
              format:'XX Formato',
              identifier:'XX Identificador',
              references:'XX Referencias',
              title:'XX Título',
              description:'XX Descripción',
              created:'XX Fecha de creación',
              creator:'XX Autor',
              contributor:'XX Parte asociada',
              publisher:'XX Editor',
              audience:'XX Audiencia',
              source:'XX Fuente',
              license:'XX Licencia',
              rightsHolder:'XX Titular de los derechos',
              datasetID:'XX ID del conjunto de datos',
            }
          }

          return res.status(200).json({results:jsonResponse});

        });
      });
    })
  });


}

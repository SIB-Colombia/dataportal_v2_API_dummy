export function read(req, res) {
  const jsonResponse = {
    occurrence: {
      occurrenceID: 'ID del registro biológico',
      catalogNumber: 'Número de catálogo',
      occurrenceRemarks: 'Comentarios del registro biológico',
      recordNumber: 'Número de registro',
      recordedBy: 'Registrado por',
      organismID: 'ID del individuo',
      individualCount: 'Número de individuos',
      sex: 'Sexo',
      lifeStage: 'Etapa de vida',
      reproductiveCondition: 'Condición reproductiva',
      behavior: 'Comportamiento',
      establishmentMeans: 'Medios de establecimiento',
      occurrenceStatus: 'Estado del registro biológico',
      preparations: 'Preparaciones',
      disposition: 'Disposición',
      otherCatalogNumbers: 'Otros números de catálogo',
      associatedMedia: 'Medios asociados',
      associatedReferences: 'Referencias asociadas',
      associatedSequences: 'Secuencias asociadas',
      associatedTaxa: 'Taxones asociados',
      basisOfRecord: 'Base del registro',
      institutionCode: 'Código de la institución',
      collectionCode: 'Código de la colección',
      type: 'Tipo',
      modified: 'Modificado',
      language: 'Idioma',
      license: 'Licencia',
      rightsHolder: 'Titular de los derechos',
      accessRights: 'Derechos de acceso',
      bibliographicCitation: 'Citación bibliográfica',
      references: 'Referencias',
      institutionID: 'ID de la institución',
      collectionID: 'ID de la colección',
      datasetID: 'ID del conjunto de datos',
      datasetName: 'Nombre del conjunto de datos',
      ownerInstitutionCode: 'Código de la institución propietaria',
      informationWithheld: 'Información retenida',
      dataGeneralizations: 'Generalización de los datos',
      dynamicProperties: 'Propiedades dinámicas',
      eventID: 'ID del evento',
      parentEventID: 'ID del evento parental',
      samplingProtocol: 'Protocolo de muestreo',
      sampleSizeValue: 'Tamaño de la muestra',
      sampleSizeUnit: 'Unidad del tamaño',
      samplingEffort: 'Esfuerzo de muestreo',
      eventDate: 'Fecha del evento',
      eventTime: 'Hora del evento',
      startDayOfYear: 'Día inicial del año',
      endDayOfYear: 'Día final del año',
      year: 'Año',
      month: 'Mes',
      day: 'Día',
      verbatimEventDate: 'Fecha original del evento',
      habitat: 'Hábitat',
      fieldNumber: 'Número de campo',
      fieldNotes: 'Notas de campo',
      eventRemarks: 'Comentarios del evento',
      locationID: 'ID de la ubicación',
      higherGeographyID: 'ID de la geografía superior',
      higherGeography: 'Geografía superior',
      continent: 'Continente',
      waterBody: 'Cuerpo de agua',
      islandGroup: 'Grupo de islas',
      island: 'Isla',
      country: 'País',
      countryCode: 'Código del país',
      stateProvince: 'Departamento',
      county: 'Municipio',
      municipality: 'Centro poblado / Cabecera municipal',
      locality: 'Localidad',
      verbatimLocality: 'Localidad original',
      verbatimElevation: 'Elevación original',
      minimumElevationInMeters: 'Elevación mínima en metros',
      maximumElevationInMeters: 'Elevación máxima en metros',
      verbatimDepth: 'Profundidad original',
      minimumDepthInMeters: 'Profundidad mínima en metros',
      maximumDepthInMeters: 'Profundidad máxima en metros',
      minimumDistanceAboveSurfaceInMeters: 'Distancia mínima de la superficie metros',
      maximumDistanceAboveSurfaceInMeters: 'Distancia máxima de la superficie metros',
      locationAccordingTo: 'Ubicación de acuerdo con',
      locationRemarks: 'Comentarios de la ubicación',
      verbatimCoordinates: 'Coordenadas originales',
      verbatimLatitude: 'Latitud original',
      verbatimLongitude: 'Longitud original',
      verbatimCoordinateSystem: 'Sistema original de coordenadas',
      verbatimSRS: 'SRS original',
      decimalLatitude: 'Latitud decimal',
      decimalLongitude: 'Longitud decimal',
      geodeticDatum: 'Datum geodésico',
      coordinateUncertaintyInMeters: 'Incertidumbre de las coordenadas en metros',
      coordinatePrecision: 'Precisión de las coordenadas',
      pointRadiusSpatialFit: 'Ajuste espacial del radio-punto',
      footprintWKT: 'WKT footprint',
      footprintSRS: 'SRS footprint',
      footprintSpatialFit: 'Ajuste espacial de footprint',
      georeferencedBy: 'Georreferenciado por',
      georeferencedDate: 'Fecha de georreferenciación',
      georeferenceProtocol: 'Protocolo de georreferenciación',
      georeferenceSources: 'Fuentes de georreferenciación',
      georeferenceVerificationStatus: 'Estado de la verificación de la georreferenciación',
      georeferenceRemarks: 'Comentarios de la georreferenciación',
      taxonID: 'ID del taxón',
      scientificNameID: 'ID del nombre científico',
      acceptedNameUsageID: 'ID del nombre aceptado usado',
      parentNameUsageID: 'ID del nombre parental usado',
      originalNameUsageID: 'ID del nombre original usado',
      nameAccordingToID: 'ID del nombre de acuerdo con',
      namePublishedInID: 'ID del nombre publicado en',
      taxonConceptID: 'ID del concepto del taxón',
      scientificName: 'Nombre científico',
      acceptedNameUsage: 'Nombre aceptado usado',
      parentNameUsage: 'Nombre parental usado',
      originalNameUsage: 'Nombre original usado',
      nameAccordingTo: 'Nombre de acuerdo con',
      namePublishedIn: 'Nombre publicado en',
      namePublishedInYear: 'Nombre publicado en el año',
      higherClassification: 'Clasificación superior',
      kingdom: 'Reino',
      phylum: 'Filo',
      class: 'Clase',
      order: 'Orden',
      family: 'Familia',
      genus: 'Género',
      subgenus: 'Subgénero',
      specificEpithet: 'Epíteto específico',
      infraspecificEpithet: 'Epíteto infraespecífico',
      taxonRank: 'Categoría del taxón',
      verbatimTaxonRank: 'Categoría original del taxón',
      scientificNameAuthorship: 'Autoría del nombre científico',
      vernacularName: 'Nombre común',
      nomenclaturalCode: 'Código nomenclatural',
      taxonomicStatus: 'Estado taxonómico',
      nomenclaturalStatus: 'Estado nomenclatural',
      taxonRemarks: 'Comentarios del taxón',
      identificationID: 'ID de la identificación',
      identifiedBy: 'Identificado por',
      dateIdentified: 'Fecha de identificación',
      identificationReferences: 'Referencias de la identificación',
      identificationVerificationStatus: 'Estado de la verificación de la identificación',
      identificationRemarks: 'Comentarios de la Identificación',
      identificationQualifier: 'Calificador de la identificación',
      typeStatus: 'Estado del tipo',
      organismQuantity: 'Cantidad del Organismo',
      organismQuantityType: 'Tipo de Cantidad del Organismo',
      organismName: 'Nombre del organismo',
      organismScope: 'Alcance del organismo',
      associatedOrganisms: 'Organismos asociados',
      organismRemarks: 'Comentarios del organismo',
      previousIdentifications: 'Identificaciones previas',
      associatedOccurrences: 'Registros biológicos asociados',
      materialSampleID: 'ID de muestra del ejemplar',
      geologicalContextID: 'ID del contexto geológico',
      earliestEonOrLowestEonothem: 'Eón temprano o eonotema inferior',
      latestEonOrHighestEonothem: 'Eón tardío o eonotema superior',
      earliestEraOrLowestErathem: 'Era temprana o eratema inferior',
      latestEraOrHighestErathem: 'Era tardía o eratema superior',
      earliestPeriodOrLowestSystem: 'Periodo temprano o sistema inferior',
      latestPeriodOrHighestSystem: 'Periodo tardío o sistema superior',
      earliestEpochOrLowestSeries: 'Época temprana o serie inferior',
      latestEpochOrHighestSeries: 'Época tardía o serie superior',
      earliestAgeOrLowestStage: 'Edad temprana o piso inferior',
      latestAgeOrHighestStage: 'Edad tardía o piso superior',
      lowestBiostratigraphicZone: 'Zona bioestratigráfica inferior',
      highestBiostratigraphicZone: 'Zona bioestratigráfica superior',
      lithostratigraphicTerms: 'Términos litoestratigráficos',
      group: 'Grupo',
      formation: 'Formación',
      member: 'Miembro',
      bed: 'Capa',
    },
    measurementOrFact: {
      measurementID: 'Identificador',
      measurementType: 'Tipo',
      measurementValue: 'Valor',
      measurementAccuracy: 'Precisión',
      measurementUnit: 'Unidad de medida',
      measurementDeterminedBy: 'Determinado por',
      measurementDeterminedDate: 'Fecha',
      measurementMethod: 'Método',
      measurementRemarks: 'Comentarios',
    },
    resourceRelationship: {
      resourceRelationshipID: 'ID de relación',
      resourceID: 'ID del recurso',
      relatedResourceID: 'ID del recurso relacionado',
      relationshipOfResource: 'Relación de recursos',
      relationshipAccordingTo: 'Relación de acuerdo a',
      relationshipEstablishedDate: 'Fecha de relación',
      relationshipRemarks: 'Comentarios',
    },
    multimedia: {
      type:'Tipo',
      format:'Formato',
      identifier:'Identificador',
      references:'Referencias',
      title:'Título',
      description:'Descripción',
      created:'Fecha de creación',
      creator:'Autor',
      contributor:'Parte asociada',
      publisher:'Editor',
      audience:'Audiencia',
      source:'Fuente',
      license:'Licencia',
      rightsHolder:'Titular de los derechos',
      datasetID:'ID del conjunto de datos',
    }
  }

  return res.status(200).json(jsonResponse);
}
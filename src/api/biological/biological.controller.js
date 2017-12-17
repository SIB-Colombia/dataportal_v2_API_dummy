var http = require('http');
var https = require('https');

export function list(req, res) {
  http.get('http://www.gbif.org/api/occurrence/search?country=CO&limit=5', (response) => {
    let body = '';
    response.on('data', (d) => {
      body += d
    });
    response.on('end', () => {
      const json = JSON.parse(body);
      //console.log(json)
      return res.status(200).json({results: json});
    });
  });
}

export function read(req, res) {

  //console.log("El id es: ", req.params.id);
  http.get('http://api.gbif.org/v1/occurrence/' + req.params.id, function(response) {
    var body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      //console.log("La respuesta es ", body);
      var json = JSON.parse(body);

      http.get('http://api.gbif.org/v1/dataset/' + json.datasetKey, function(response2) {
        var body2 = '';
        response2.on('data', function(d2) {
          body2 += d2;
        });
        response2.on('end', function() {
          var jsonDataset = JSON.parse(body2);

          http.get('http://api.gbif.org/v1/organization/' + json.publishingOrgKey, function(response3) {
            var body3 = '';
            response3.on('data', function(d3) {
              body3 += d3;
            });
            response3.on('end', function() {
              var jsonOrganization = JSON.parse(body3);

              const jsonResponse = {
                dataset: jsonDataset,
                occurrence: json,
                organization: jsonOrganization,
                measurementOrFact: {
                  measurementID: 'XX Identificador',
                  measurementType: 'XX Tipo',
                  measurementValue: 'XX Valor',
                  measurementAccuracy: 'XX Precisión',
                  measurementUnit: 'XX Unidad de medida',
                  measurementDeterminedBy: 'XX Determinado por',
                  measurementDeterminedDate: 'XX Fecha',
                  measurementMethod: 'XX Método',
                  measurementRemarks: 'XX Comentarios'
                },
                resourceRelationship: {
                  resourceRelationshipID: 'XX ID de relación',
                  resourceID: 'XX ID del recurso',
                  relatedResourceID: 'XX ID del recurso relacionado',
                  relationshipOfResource: 'XX Relación de recursos',
                  relationshipAccordingTo: 'XX Relación de acuerdo a',
                  relationshipEstablishedDate: 'XX Fecha de relación',
                  relationshipRemarks: 'XX Comentarios'
                },
                multimedia: {
                  type: 'XX Tipo',
                  format: 'XX Formato',
                  identifier: 'XX Identificador',
                  references: 'XX Referencias',
                  title: 'XX Título',
                  description: 'XX Descripción',
                  created: 'XX Fecha de creación',
                  creator: 'XX Autor',
                  contributor: 'XX Parte asociada',
                  publisher: 'XX Editor',
                  audience: 'XX Audiencia',
                  source: 'XX Fuente',
                  license: 'XX Licencia',
                  rightsHolder: 'XX Titular de los derechos',
                  datasetID: 'XX ID del conjunto de datos'
                }
              }
              return res.status(200).json({results: jsonResponse});

            });
          });

        });
      });
    })
  });

}



export function filters(req, res) {
  let url = "https://www.gbif.org/api/occurrence/search?advanced=false&"+
/*
BasisOfRecord
License
Location
ProviderName
ResourceName
TaxonRank
*/
      "facet=basis_of_record&"+
      "facet=month&"+
      "facet=dataset_key&"+
      "facet=institution_code&"+
      "facet=media_type&"+
      "facet=state_province&"+
      "facet=license&"+
      "facet=publishing_org&"+
      "facet=taxon_rank&"+
      "month.facetLimit=12&"+
      "publishingCountry=CO&"+
      "limit=0";

  console.log(url)

  https.get(url, (response) => {
    let body = '';
    response.on('data', (d) => {
      body += d
    });
    response.on('end', () => {
      const json = JSON.parse(body);
      //console.log(json)
      return res.status(200).json(json.facets);
    });
  });
}



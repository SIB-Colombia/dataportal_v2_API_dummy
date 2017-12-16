var http = require('http');
var _ = require('lodash');
var parseString = require('xml2js').parseString;

export function list(req, res) {
  let type=""
  if (req.params.type && req.params.type!=="" && req.params.type!=="ALL"){
    type='&type='+req.params.type;
  }
  
  let qs = req.url.split('?');
  let q = "";
  if(qs[1]){
    q = qs[1];
  }
  let consulta = 'http://api.gbif.org/v1/dataset/search?publishingCountry=CO&offset='+req.params.offset+type+"&"+q;
  http.get(consulta, function(response) {
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      //console.log("La respuesta es ", body);
      var json = JSON.parse(body);
      //console.log(json);
      return res.status(200).json(json);
/*
      var jsonResponse = [
        {
          "resourceId": 1,
          "resourceName": "EOD - eBird Observation Dataset",
          "providerName": "Cornell Lab of Ornithology",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic eligendi inventore labore ad aliquam sed, id, tempore eveniet natus. Necessitatibus suscipit veritatis reiciendis inventore, in sint aut porro perferendis.',
          "collectionName": "",
          "institutionCode": "",
          location: 'CIUDAD',
          "count": 275718645,
          imageUrl: "/logo_entidad.png",
          type: 'ocurrencce dataset'
        },
        {
          "resourceId": 2,
          "resourceName": "EOD - eBird Observation Dataset",
          "providerName": "Cornell Lab of Ornithology",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic eligendi inventore labore ad aliquam sed, id, tempore eveniet natus. Necessitatibus suscipit veritatis reiciendis inventore, in sint aut porro perferendis.',
          "collectionName": "",
          "institutionCode": "",
          location: 'CIUDAD',
          "count": 275718645,
          imageUrl: "/logo_entidad.png",
          type: 'ocurrencce dataset'
        }
      ]

      return res.status(200).json(jsonResponse);
      */
    });
  });

}

export function read(req, res) {

  //console.log(req.params);

  http.get('http://api.gbif.org/v1/dataset/'+req.params.id, function(response) {
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      //console.log(body);
      var json = JSON.parse(body);
      http.get('http://api.gbif.org/v1/organization/'+json.publishingOrganizationKey, function(response2) {
        var body2 = '';
        response2.on('data', function(d2) {
            body2 += d2;
        });
        response2.on('end', function() {
          //console.log(body2);
          var json2 = JSON.parse(body2);
          json.publishingOrganization = json2;
          //console.log(json);
          return res.status(200).json(json);
        })
      });
    })
  });
}

       /*

    var jsonResponse = {
      eml: {
        resourceName: 'NOMBRE DEL RECURSO',
        providerName: 'PUBLICADO POR',

        contacts: [
          {
            name: 'Martha Isabel Vallejo Joyas',
            inf: [
              'Orginator Metadata Author',
              'Principal Investigador',
              'Investigador principal',
              'Calle 28 A No. 15-09',
              'Bogotá, D.C',
              'Bogotá, D.C',
              'Colombia',
              'martisavallejo@gmail.com',
              '320-2767',
            ],
          },
        ],

        dataset: {
          abstract: {
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptate nemo possimus fuga vero omnis blanditiis ducimus atque animi placeat, quidem ipsam explicabo dicta neque magni odio voluptas sed inventore.',
          },
          associatedParty: {
            pubDate: '10/08/2017',
          },
          purpose: {
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet provident ea quidem, molestias facere, doloremque ut veniam nulla accusantium quae eius debitis quo sit ipsum molestiae rem magni modi, amet.',
          },
          intellectualRights: {
            ulink_url: {
              citetitle: 'by',
            },
          },
          coverage: {
            temporalCoverage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam praesentium, sapiente. Qui molestias earum eum assumenda a pariatur quia laborum, similique sit quo harum, itaque! Suscipit ad vel ut consequuntur.',
            geographicCoverage: {
              geographicDescription: '*COBERTURA GEOGRÁFICA',
              boundingCoordinates: '*COBERTURA GEOGRÁFICA',
            },
            taxonomicCoverage: {
              generalTaxonomicCoverage: '*COBERTURA TAXONÓMICA',
            },
          },
          methods: {
            sampling: {
              studyExtent: {
                description: {
                  para: '*METODOLOGÍA_Área de estudio',
                },
              },
              samplingDescription: {
                para: '*METODOLOGÍA_Descripción del muestreo',
              },
            },
            qualityControl: {
              description: {
                para: '*METODOLOGÍA_Control de calidad',
              },
            },
            methodStep: {
              description: {
                para: '*METODOLOGÍA_Metodología paso a paso',
              },
            },
          },
          alternateIdentifier: 'doi:10.15472/ch49b6'
        },
        associatedParty: '*PARTES ASOCIADAS',
        additionalMetadata: {
          metadata: {
            gbif: {
              citation_identifier: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptates neque, sapiente nisi necessitatibus voluptate ullam rerum minus repellat impedit accusamus earum quasi in deleniti aut minima adipisci. Magni, ex.',
              bibliography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae unde repudiandae voluptas vitae minus impedit accusantium officia eaque, esse excepturi laborum blanditiis nihil, laudantium dignissimos rerum voluptatem, culpa adipisci.',
            },
          },
        },
      },
    }

    const proyecto = {
      eml: {
        dataset: {
          project: {
            title: 'TÍTULO',
            studyAreaDescription: {
              descriptor_name: {
                citableClassificationSystem: {
                  descriptorValue: '*ÁREA DE ESTUDIO'
                }
              }
            },
            designDescription: {
              description: {
                para: '*DESCRIPCIÓN DEL DISEÑO'
              }
            },
            personnel: '*PARTES ASOCIADAS AL PROYECTO'
          },
          abstract: {
            para: 'DESCRIPCIÓN'
          },
          founding: {
            para: 'FUENTES DE FINANCIACIÓN'
          }
        }
      }
    }
  */

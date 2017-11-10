var http = require('http');
var _ = require('lodash');

export function read(req, res) {

  console.log(req.params.id);
  http.get('http://api.gbif.org/v1/organization/'+req.params.id, function(response) {
   // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var r = JSON.parse(body)
            return res.status(200).json(r)
            /*
            var h = parsed.response.hits.hits[0]
            var r = {
              eml: {
                providerName: h._source.provider.name,
                dataset: {
                  keywordSet: {
                    keyword: 'providerName'
                  },
                  organization: {
                    description: h._source.provider.description,
                    city: h._source.provider.city,
                    web_site: h._source.provider.website_url,
                    contacts: [
                      {
                        type: '',
                        name: '',
                        inf: [
                          h._source.provider.email,
                        ],
                      },
                      {
                        type: '',
                        name: '',
                        inf: [
                          h._source.provider.email,
                        ],
                      },
                    ]
                  }
                },
                additionalMetadata: {
                  metadata: {
                    gbif: {
                      resourceLogoUrl: h._source.resource.logo_url
                    }
                  }
                },
                occurrence: {
                  count: {
                    providerName: '-1',
                    resourceName: '-1',
                    scientificName: '-1',
                  }
                }
              }
            }
            console.log(r)
            return res.status(200).json(r)
            */
        });
  })
/*
  const jsonResponse = {
    eml: {
      providerName: 'NOMBRE DEL PUBLICADOR',
      dataset: {
        keywordSet: {
          keyword: 'providerName'
        },
        organization: {
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis soluta quaerat, nisi, quibusdam velit cumque laboriosam corporis voluptates labore expedita reiciendis a adipisci quam saepe recusandae sapiente, voluptatem vero repudiandae.',
          city: '*CIUDAD',
          web_site: 'http://localhost/',
          contacts: [
            {
              type: 'administrative',
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
            {
              type: 'technical',
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
            }
          ]
        }
      },
      additionalMetadata: {
        metadata: {
          gbif: {
            resourceLogoUrl: '/logo_entidad.png'
          }
        }
      },
      occurrence: {
        count: {
          providerName: '1800',
          resourceName: '8100',
          scientificName: '181',
        }
      }
    }
  }

  return res.status(200).json(jsonResponse)
*/
}

export function list(req, res) {

  http.get('http://api.gbif.org/v1/organization?country=CO', function(response) {
   // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var r = JSON.parse(body)
            return res.status(200).json(r)
            //console.log(parsed.response.hits)
            /*
            var r = _.map(parsed.response.hits.hits, function(h){
              return {
                  id: h._source.provider.id,
                  eml: {
                    providerName: h._source.provider.name,
                    dataset: {
                      keywordSet: {
                        keyword: 'providerName'
                      },
                      organization: {
                        description: h._source.provider.description,
                        city: h._source.provider.city,
                        web_site: h._source.provider.website_url,
                        contacts: [
                          h._source.provider.email
                        ]
                      }
                    },
                    additionalMetadata: {
                      metadata: {
                        gbif: {
                          resourceLogoUrl: h._source.resource.logo_url
                        }
                      }
                    },
                    occurrence: {
                      count: {
                        providerName: '-1',
                        resourceName: '-1'
                      }
                    }
                  }
                }
            })

            console.log("Antes de retornar")
            console.log(r)
            */
        });
  })

/*

  const jsonResponse = [
    {
      id: 1,
      eml: {
        providerName: 'NOMBRE DEL PUBLICADOR',
        dataset: {
          keywordSet: {
            keyword: 'providerName'
          },
          organization: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nobis repellat accusamus ea ipsa tempore veniam eligendi quae totam a sunt quisquam expedita sapiente, nisi error, atque, reprehenderit delectus. Animi!',
            city: '*CIUDAD',
            web_site: 'http://localhost/',
            contacts: [
              '*CONTACTO ADMINISTRATIVO',
              '*CONTACTO TÉCNICO'
            ]
          }
        },
        additionalMetadata: {
          metadata: {
            gbif: {
              resourceLogoUrl: '/logo_entidad.png'
            }
          }
        },
        occurrence: {
          count: {
            providerName: '7000',
            resourceName: '3000'
          }
        }
      }
    },
    {
      id: 2,
      eml: {
        providerName: 'NOMBRE DEL PUBLICADOR',
        dataset: {
          keywordSet: {
            keyword: 'providerName'
          },
          organization: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum omnis at officia ratione, dolorum unde vitae beatae eaque optio itaque ipsum tenetur adipisci corporis molestiae doloribus veniam assumenda, accusamus excepturi.',
            city: '*CIUDAD',
            web_site: 'http://localhost/',
            contacts: [
              '*CONTACTO ADMINISTRATIVO',
              '*CONTACTO TÉCNICO'
            ]
          }
        },
        additionalMetadata: {
          metadata: {
            gbif: {
              resourceLogoUrl: '/logo_entidad.png'
            }
          }
        },
        occurrence: {
          count: {
            providerName: '1800',
            resourceName: '8100'
          }
        }
      }
    }
  ]

  return res.status(200).json(jsonResponse)
  */
}

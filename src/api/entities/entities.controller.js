var http = require('http');
var _ = require('lodash');

export function list(req, res) {
  var q = [];
  var url = 'http://190.158.236.194:5000/api/provider/list';

  _.map(req.query, (value, key) => { q.push(key + '=' + value) });
  if (q.length > 0) url += '?' + _.join(q, '&')

  http.get(url, (response) => {
    var body = '';
    response.on('data', (d) => {
      body += d;
    })

    response.on('end', () => {
      return res.status(200).json(JSON.parse(body))
    })
  })
}

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

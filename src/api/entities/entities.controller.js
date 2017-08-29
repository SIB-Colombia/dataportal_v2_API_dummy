export function read(req, res) {
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
            resourceLogoUrl: 'logo_entidad.png'
          }
        }
      },
      occurrence: {
        count: {
          providerName: '1880',
          resourceName: '5400',
          scientificName: '3200',
        }
      }
    }
  }

  return res.status(200).json(jsonResponse)
}

export function list(req, res) {
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
              resourceLogoUrl: 'logo_entidad.png'
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
              resourceLogoUrl: 'logo_entidad.png'
            }
          }
        },
        occurrence: {
          count: {
            providerName: '1800',
            resourceName: '6500'
          }
        }
      }
    }
  ]

  return res.status(200).json(jsonResponse)
}
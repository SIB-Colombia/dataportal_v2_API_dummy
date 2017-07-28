export function read(req, res) {
  const jsonResponse = {
    id: 1,
    providerName: "Red Nacional de Observadores de Aves (RNOA)",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.",
    imageUrl: "/logo_entidad.png",
    department: 'DEPARTAMENTO',
    globalInfo: {
      records: 546321,
      datasets: 1800,
      species: 5350,
      georeferenced: 1800,
    },
    webLink: 'Sitio web del publicador',
    principalContacts: {
      endorcedBy: 'SiB Colombia',
      installation: 'CCO 1.0',
      administrativeContact: 'Gualberto Buitrago',
      technicalContact: 'Gualberto Buitrago',
    },
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
          '320-2767'
        ]
      },
    ]

  }

  return res.status(200).json(jsonResponse)
}

export function list(req, res) {
  const jsonResponse = [
    {
      id: 1,
      providerName: "Red Nacional de Observadores de Aves (RNOA)",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.",
      imageUrl: "/logo_entidad.png",
      department: 'DEPARTAMENTO',
      globalInfo: {
        records: 546321,
        datasets: 1800,
        species: 5350,
        georeferenced: 1800,
      },
      webLink: 'Sitio web del publicador',
      principalContacts: {
        endorcedBy: 'SiB Colombia',
        installation: 'CCO 1.0',
        administrativeContact: 'Gualberto Buitrago',
        technicalContact: 'Gualberto Buitrago',
      },
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
            '320-2767'
          ]
        },
      ]

    },
    {
      id: 2,
      providerName: "Red Nacional de Observadores de Aves (RNOA)",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.",
      imageUrl: "/logo_entidad.png",
      department: 'DEPARTAMENTO',
      globalInfo: {
        records: 546321,
        datasets: 1800,
        species: 5350,
        georeferenced: 1800,
      },
      webLink: 'Sitio web del publicador',
      principalContacts: {
        endorcedBy: 'SiB Colombia',
        installation: 'CCO 1.0',
        administrativeContact: 'Gualberto Buitrago',
        technicalContact: 'Gualberto Buitrago',
      },
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
            '320-2767'
          ]
        },
      ]

    },
  ]

  return res.status(200).json(jsonResponse)
}
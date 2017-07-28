export function list(req, res) {

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

}

export function read(req, res) {

  var jsonResponse = {
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
  }

  return res.status(200).json(jsonResponse);
}
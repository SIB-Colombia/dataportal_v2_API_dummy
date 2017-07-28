export function read(req, res) {

  var jsonResponse = [
    {
      id: 1,
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
    {
      id: 2,
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
    {
      id: 3,
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
    {
      id: 4,
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
  ]

  return res.status(200).json(jsonResponse);

} 
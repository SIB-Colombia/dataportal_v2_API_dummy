export function read(req, res) {

  var jsonResponse = [
    {
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
    {
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
    {
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
    {
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    },
    {
      "providerName": "Herbario Nacional Colombiano (COL)",
      "resourceCount": 9990999,
      "registryCount": 9990999
    }
  ]

  return res.status(200).json(jsonResponse);

} 
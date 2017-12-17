var https = require('https');

let cache = {
};

export function general(req, res) {
  let total = 0;
  let coordenadas = 0;
  let especies = 0;
  
  let llave = req.params.id+"_"+req.params.param;
  
  if (cache[llave] !== undefined){
    return res.status(200).json(cache[llave]);
  }

  get("https://api.gbif.org/v1/occurrence/search?limit=0&country=CO&publishingCountry=CO&"+req.params.id+"="+req.params.param, function(dTotal){
    total = dTotal.count;

  get("https://api.gbif.org/v1/occurrence/search?limit=0&country=CO&publishingCountry=CO&hasCoordinate=true&"+req.params.id+"="+req.params.param, function(dCoordenadas){
    coordenadas = dCoordenadas.count;

  get("https://api.gbif.org/v1/species/search?limit=0&country=CO&publishingCountry=CO&"+req.params.id+"="+req.params.param, function(dEspecies){
    especies = dEspecies.count;


    var jsonResponse = [
        { name: "REGISTROS", value: total },
        { name: "CON COORDENADAS", value: coordenadas },
        { name: "ESPECIES", value: especies },
    ]
    cache[llave] = jsonResponse;
    return res.status(200).json(jsonResponse);

  });
  });
  });

}




function get(url, callback){
  console.log("Estadisticas de: \t",url)
  https.get(url, function(response) {
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      //console.log("La respuesta es ", body);
      var json = JSON.parse(body);
      return callback(json);
    });
  });
}

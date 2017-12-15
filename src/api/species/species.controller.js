var https = require('https');
var url = require('url');
//var _ = require('lodash');

export function read(req, res) {

  const jsonResponse = [
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
    {
      "count": 9990999,
      "scientificName": "Larus argentatus Pontoppiban, 1783",
      "kingdom": "Animal",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Charadriiform",
      "family": "Laridae",
      "genus": "GÉNERO",
      "specificEpithet": "EPÍTETO ESPECÍFICO",
    },
  ]

  return res.status(200).json(jsonResponse);

}


export function list(req, res) {
  let qs = req.url.split('?');
  let q = "";
  if(qs[1]){
    q = qs[1];
  }

  let consulta = 'https://www.gbif.org/api/occurrence/taxon?publishingCountry=CO&limit=20&locate=es&advanced=false&offset='+req.params.offset+"&"+q;
  console.log(consulta);
  https.get(consulta, function(response) {
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      try {
        var json = JSON.parse(body);
        return res.status(200).json(json);
      }
      catch (e) {
        console.log(e)
        return res.status(500).json({"error":e});
      }

    });
  });

}


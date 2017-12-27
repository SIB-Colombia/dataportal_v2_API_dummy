const http = require('http');
var _ = require('lodash');

export function facets(req, res) {
  console.log("La consulta que tengo que pasar es");
  console.log(req.url);
  
  let consulta = "http://190.158.236.195:5000/api"+req.url;
  http.get(consulta, function(response) {
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      //console.log("La respuesta es ", body);
      var json = JSON.parse(body);
      //console.log(json);
      let facets = {}
      _.map(json.values, (v, k)=>{
        let countsX = {}
        let nombre = v.stats_facet.split("_")[1]
        
        _.map(v.values, (v2, k2)=>{
          let nombre2 = v2._id[nombre]
          if (nombre2===""){
            nombre2 = "Sin_Nombre"
          }
          countsX[nombre2] = {
            "count": v2.total ? v2.total : 0,
            "fraction": v2.average ? v2.average : 0,
            "title": nombre2 ? nombre2 : "sin_nombre_"+k+"_"+k2
          }
        })
        facets[nombre.toUpperCase()] = {"counts": countsX}
      })
      
      console.log(facets)
      return res.status(200).json(facets);

    });
  });
}


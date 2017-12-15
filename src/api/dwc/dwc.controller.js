const wget = require('node-wget');
const fs = require('fs');
const cmd = require('node-cmd');

function base64url_encode(s) {
  let b = new Buffer(s).toString('base64');
  return b.replace('/','_').replace('+','-')
}

export function data(req, res) {

  let path = base64url_encode(req.params.url);
  let org = req.params.url
  let carpeta = "cache";

  let finalDwC = carpeta+"/"+path+".zip";
  let final = carpeta+"/"+path+"/occurrence.txt";
  
  
  fs.stat(final, function (err, stats){
    if (err){
      verificarCarpeta(carpeta, function(){
        descargar(org, finalDwC, function(){
          procesarDwc(carpeta, path, function(){
            enviarArchivo(final, res);
          });
        });
      });
    }else{
      enviarArchivo(final, res);
    }
  });
  
}

function enviarArchivo(final, res){
  var img = fs.readFileSync(final);
  res.writeHead(200, {'Content-Type': 'text/csv' });
  res.end(img, 'binary');
}

function procesarDwc(carpeta, path, callback){

    let comando = `mkdir -p `+carpeta+"/"+path+"\n";
    comando += `cd `+carpeta+"/"+path+"\n";
    comando += "unzip ../"+path+".zip\n";

    console.log("Comando: ");
    console.log(comando);

    cmd.get(
      comando, 
      function(err, data, stderr){
          console.log('Resultado operación: ');
          console.log("Error: ", err)
          console.log("Stderr: ", stderr)
          console.log("Data: ", data);
          callback();
      }
    );
}

function ext(file){
  let fs = file.split(".");
  return fs[fs.length-1].toLowerCase();
}

function verificarCarpeta(carpeta, callback){
  fs.stat(carpeta, function (err, stats){
    if (err) {
      console.log
      return fs.mkdir(carpeta , callback);
    }
    callback()
  });
}

function descargar(url, path, callback){
  fs.stat(path, function (err, stats){
    if (err){
      console.log("Archivo no existe descargando", url);
      wget({
          url:  url,
          dest: path,
          timeout: 20000
        },
        function (error, response, body) {
          console.log("imagen descargada");
          if (error) {
              console.log('--- error:');
              console.log(error);            // error encountered
          } else {
              callback();
          }
        }
      );  
    }else{
      console.log("Archivo existe");
      callback();
    }
  });
}

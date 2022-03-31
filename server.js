 var http = require('http');

http.createServer(function (req, res) {
  res.write('Olá terceiro B!');
  res.end(); 
}).listen(8080); 
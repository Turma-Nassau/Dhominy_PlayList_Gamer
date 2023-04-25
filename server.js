const express = require('express')
const app = express()
const port = 5555
const musicas = require("./routes/musicas")

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
app.get('/1', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
app.get('/2', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
app.get('/3', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
app.get('/4', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
app.get('/5', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

// EM BREVE -- 
// Cada numero é o ID de uma musica que esta sendo reproduzida

app.use(express.static(__dirname + '/extra'));
app.use(express.static(__dirname + '/extra2'));
//rotas
app.use('/musicas', musicas)

//app.listen(port, () => {
 // console.log(`Example app listening on port ${port}`)})
 app.listen(5555, function(){
  console.log("Servidor Rodando")
});
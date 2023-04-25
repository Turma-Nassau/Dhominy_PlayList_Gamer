const express = require("express")
const router = express.Router()
router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
  })

  router.get('/1', function(req, res){
    res.sendFile(__dirname + '/index.html')
  })

  router.get('/2', function(req, res){
    res.sendFile(__dirname + '/index.html')
  })

  router.get('/3', function(req, res){
    res.sendFile(__dirname + '/index.html')
  })

  // EM BREVE -- 
// Cada numero é o ID de uma musica que esta sendo reproduzida



module.exports = router
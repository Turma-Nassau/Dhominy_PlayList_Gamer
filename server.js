const express = require('express')
const app = express()
const port = 5555

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.use(express.static(__dirname + '/extra'));
app.use(express.static(__dirname + '/extra2'));

//app.listen(port, () => {
 // console.log(`Example app listening on port ${port}`)})
 app.listen(5555);
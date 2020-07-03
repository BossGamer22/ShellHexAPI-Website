//Variables
const express = require('express');
const port = process.env.PORT || 8000
const api = express();

//Self
api.use(express.static(__dirname + "/public"))

//Listener
api.listen(port, () =>{
    console.log('Server: Connected.')
})

//Main
api.get('/', function(req, res){
    res.render('index')
})
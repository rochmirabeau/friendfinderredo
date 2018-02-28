var bodyParser = require ('body-parser')
var express = require('express')
var path = require('path')

//express setup
var app = express()
var PORT = 3000
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//import router
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)
app.use(express.static('./app/routing'))


//listener
app.listen(PORT, function() {console.log(`listening on ${PORT}`)})



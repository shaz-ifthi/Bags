//Dependencies
var express = require('express')
var db = require("./models")
var app = express()

var bodyparser = require('body-parser')
var path = require('path')
var PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
//middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//Routes
require('./routes/api/bag-routes.js')(app)
require('./routes/api/user-routes.js')(app)
require('./routes/api/html-routes.js')(app)

//Sync
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("Listening on port " + PORT)
    })
})
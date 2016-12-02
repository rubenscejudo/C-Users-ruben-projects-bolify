const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

const getBands = require('./handlers/getBands.js')
const addBand = require('./handlers/addBand.js')
const getBandById = require('./handlers/getBandById.js')

const app = express()
const PORT = process.env.URL_DB || 3000;
const URL_DB = process.env.URL_DB || "mongodb://localhost:27017/bolos"

app.use( express.static('public') )

// needed for POST => req.body
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

MongoClient.connect(URL_DB, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.get('/bands', getBands.bind(null,db) ) // -> /bands?province=murcia
	app.post('/bands', addBand.bind(null,db) )
	app.get('/band/:id', getBandById.bind(null,db) ) // -> /band/df87f9sd7f9sd8f7d98sf7

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )



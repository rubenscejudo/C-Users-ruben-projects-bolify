const express = require('express')
const bodyparser = require('body-parser')

const MongoClient = require('mongodb').MongoClient;
const app = express()
const PORT = 3000;
const url = "mongodb://localhost:27017/bolofy"

app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.get('/index', function (req, res) {
	
		db.collection('bands')
		.find( )
		.toArray()
		.then((data)=>{console.log(data)})
  		
  		res.render('index')

	})



	app.get('/search', function (req, res) {

  		console.log('ok')
  		res.render('search')
	})

	app.get('/api/bands', function (req, res) {
		
		const province = req.query.province;
		const style = req.query.style;
 
		let filter = {};

		if (province) {
			filter.provinces_play = {
				$in : [ province ]     
			}         
		}

		if (style) {
			filter.style = {
				$in : [ style ]     
			}         
		}


		db.collection("bands")
			.find( filter )
			.toArray()
			.then( data => res.json(data))
			
	})

	app.get('/contact', function (req, res) {
  		
  		res.render('contact')
	})

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) ) 
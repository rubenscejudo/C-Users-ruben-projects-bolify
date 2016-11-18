const express = require('express')
const bodyparser = require('body-parser')

const MongoClient = require('mongodb').MongoClient;
const app = express()
const PORT = 3000;
const url = "mongodb://localhost:27017/bolofy"
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.get('/', function (req, res) {
  		res.render('index')
	})

	app.get('/contact', function (req, res) {
  		res.render('contact')
	})

	
/*	------------POST------------------
*/

app.post('/bands', function (req, res) {
		
		const province = req.body.province;
		const style = req.body.style;
 		
		console.log(province)
		console.log(style)

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
			.then( data => res.render('results', {data}))
		

});

	/* ------- API ----------------- */

	/*app.get('/api/bands', function (req, res) {
		
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



		console.log(filter);
		db.collection("bands")
			.find( filter )
			.toArray()
			.then( data => res.render('search', {data}))

	})*/
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) ) 
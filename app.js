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
app.use( bodyParser.json() )

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.get('/', function (req, res) {
  		res.render('index')
	})

	app.get('/formband', function(req, res){
		res.render('formband')
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

	app.post('/formband', function (req,res){

		

		const band = req.body.band;

		/*for (var i = 0; i<2; i++) {
		var members = []

		let name = req.body.name_member +i;
		let surname = req.body.surname_member +i;
		let role = req.body.role_member+i;

		var member = {name : name, surname : surname, role: role}

		members.push(member)
		console.log(members);
		}
*/
	


		let style = req.body.style;
		style = style.split(",");
		let provinces_play = req.body.provinces_play;
		provinces_play = provinces_play.split(",");
		const description = req.body.description;

		const newBand = {
			band : band,
			members :{name : name, surname :surname, role : role},
			style : style,
			provinces_play : provinces_play,
			description : description
		};
		
		console.log(newBand)
	
		db.collection("bands")
			.insert(newBand)
			.then( data => res.redirect('formband'))
					
	});

})
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) ) 
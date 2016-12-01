const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

const getBands = require('./handlers/getBands.js')
const addBand = require('./handlers/addBand.js')

const app = express()
const PORT = process.env.URL_DB || 3000;
const URL_DB = process.env.URL_DB || "mongodb://localhost:27017/bolofy"

app.use( express.static('public') )

// needed for POST => req.body
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

MongoClient.connect(URL_DB, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.get('/bands', getBands.bind(null,db) )
	app.post('/bands', addBand.bind(null,db) )

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )


	// app.get('/', function (req, res) {
	// 	res.render('index')
	// })

	// app.get('/formband', function(req, res){
	// 	res.render('formband')
	// })

	// app.get('/contact', function (req, res) {
	// 	res.render('contact')



/*	------------POST------------------
*/

// app.post('/bands', function (req, res) {

// 	const province = req.body.province;
// 	const style = req.body.style;

// 	console.log(province)
// 	console.log(style)

// 	let filter = {};

// 	if (province) {
// 		filter.provinces_play = {
// 			$in : [ province ]
// 		}
// 	}

// 	if (style) {
// 		filter.style = {
// 			$in : [ style ]
// 		}
// 	}

// 	db.collection("bands")
// 	.find( filter )
// 	.toArray()
// 	.then( data => res.render('results', {data}))


// });

// app.post('/formband', function (req,res){



// 	const band = req.body.band;

// 	for (var i = 0; i<4; i++) {
// 		var members = []
// 		if (i==0) {
// 			let name = req.body.name_member_;
// 			let surname = req.body.surname_member_;
// 			let role = req.body.role_member_;

// 			var member = {name : name, surname : surname, role: role}


// 			members.push(member)
// 		}
// 		else{

// 			let name = req.body.name_member_  + i;
// 			let surname = req.body.surname_member_ + i;
// 			let role = req.body.role_member_ + i ;

// 			console.log(req.body.name_member_  + i)
// 			var member = {name : name, surname : surname, role: role}


// 			members.push(member)


// 		}

// 		console.log(members)
// 	}



// 	let style = req.body.style;
// 	style = style.split(",");
// 	let provinces_play = req.body.provinces_play;
// 	provinces_play = provinces_play.split(",");
// 	const description = req.body.description;

// 	const newBand = {
// 		band : band,
// 		members : members,
// 		style : style,
// 		provinces_play : provinces_play,
// 		description : description
// 	};

// 	console.log(newBand)

// 	db.collection("bands")
// 	.insert(newBand)
// 	.then( data => res.redirect('formband'))

// });


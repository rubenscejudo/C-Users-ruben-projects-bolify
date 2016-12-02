const ObjectId = require('mongodb').ObjectId;

function getBandById (db, req, res) {

	// 583f58f5c611b1beb517fee8


	const id = req.params.id;
	const filter = { _id: ObjectId(id) }

	db.collection("bands")
		.find(filter)
		.toArray()
		//.then( res.json )
		.then( data => res.json(data) )

}

module.exports = getBandById
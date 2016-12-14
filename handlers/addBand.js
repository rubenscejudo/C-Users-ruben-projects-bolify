function addBand (db, req, res ) {

	const newBand = req.body

	if (newBand.style) {
		newBand.style = newBand.style.split(",")
	}

	if (newBand.provinces_play) {
		newBand.provinces_play = newBand.provinces_play.split(",")
	}

	
	console.log(newBand)


	db.collection("bands")
		.insert(newBand)
		//.then( res.json(data) )
		.then( () => res.sendStatus(200) )
		.catch( () => res.sendStatus(500) )

	// res.render
	// res.json

}

module.exports = addBand
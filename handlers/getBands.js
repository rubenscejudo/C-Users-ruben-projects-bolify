function getBands (db, req, res) {

	const province = req.query.province;
	const style = req.query.style;

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

	console.log(filter)

	db.collection("bands")
		.find(filter)
		.toArray()
		//.then( res.json )
		.then( data => res.json(data) )

}

module.exports = getBands
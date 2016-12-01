app.get('/bands', function (req, res) {
		
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

		// // /bands
		// {}

		// // /bands?province=murcia
		// { 
		// 	provinces_play: {
		// 		$in : [ province ]     
		// 	}         
		// }

		// // /bands?style=rock
		// { 
		// 	style: {
		// 		$in : [ style ]     
		// 	}         
		// }

		// // /bands?province=murcia&style=rock

		// {	 
		// 	provinces_play: {
		// 		$in : [ province ]     
		// 	},
		// 	style: {
		// 		$in : [ style ]     
		// 	}           
		// }

		db.collection("bands")
			.find( filter )
			.toArray()
			.then( data => res.json(data))
			// .then( dataFilteredByProvince => {
			// 	res.status(200).json( dataFilteredByProvince)
			// 	console.log("!!!!! " + dataFilteredByProvince[1].band)
			// }) 
	})

	 // db.bands.find({ provinces_play:  {  $in : [ "Barcelona" ]     }         }).count()


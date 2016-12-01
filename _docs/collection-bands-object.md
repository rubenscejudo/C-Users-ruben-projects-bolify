db.bands.insert([
	{
    "_id" : ObjectId("582b10aa5c2affa4c0d93da5"),
    "band" : "porretas",
    "members" : [ 
        {
            "name" : "miguel",
            "surname" : "martinez",
            "role" : "cantante"
        }, 
        {
            "name" : "antonio",
            "surname" : "lopez",
            "role" : "guitarrista"
        }, 
        {
            "name" : "pedro",
            "surname" : "lopez",
            "role" : "bajista"
        }, 
        {
            "name" : "juan",
            "surname" : "marquez",
            "role" : "bateria"
        }
    ],
    "style" :  [ 
        "rock", 
        "blues"
    ],
    "provinces_play" : [ 
        "murcia", 
        "granada"
    ]
}
])

db.bands.insert([
	{
		band: "Vetusta Morla",
		members: [
			{
				name: "Pucho",
				surname: "Martinez"
			},
			{
				name: "Guillermo",
				surname: "Galvan"
			},
			{
				name: "Manuel",
				surname: "Garcia"
			}
		],

		provinces_play : [ 'Barcelona', 'Granada', 'Malaga' ]
	},
	{
    "_id" : ObjectId("582c232f4af57759de1a307a"),
    "band" : "vetusta morla",
    "members" : [ 
        {
            "name" : "pucho",
            "surname" : "martinez",
            "role" : [ 
                "cantante", 
                "bajista"
            ]
        }, 
        {
            "name" : "guillermo",
            "surname" : "galvan",
            "role" : "guitarrista"
        }, 
        {
            "name" : "manuel",
            "surname" : "garcia",
            "role" : "bateria"
        }
    ],
    "style" : [ 
        "rock", 
        "indy"
    ],
    "provinces_play" : [ 
        "Barcelona", 
        "Granada", 
        "Malaga"
    ]
}
])
#BOLOFY

#Synopsis

Bolofy is a web thought to connect bands with locals' owners or individuals.

    . Search by location/style
    . Take a look at the bands and check their profile.
    . Contact the one you like and hire it.


1. Se lanza la funcion findBand /search.html
2. findBand llama al servicio getBand() y esto devuelve los datos
3. En el lado del servidor se prepara un end point para que reciba
 La peticion en app.js => app.get('/bands'-recibe la petición-,-y ejecuta esta funcion- getBands.bind(null,db) )
4. Ejecuta la funcion getBands en el Handler, y devuelve un json
5. en searchController 
        DataService.getBands( province, style )
                        .then( function(response) {
                            console.log(response)
                            //console.log(response.data.artists.items)
                            $rootScope.bands = response.data;
                            $location.path('/results')
                        })
                }
y recibo el json con el que trabajo en angular.

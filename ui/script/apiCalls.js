var rp = require('request-response') ;

class APIController{
    //1. GET data from the server-database.............
    accessData( url , data ) {
        
        var options = {
            method: 'GET' ,
            uri: url ,
            json: true ,
        }

        var response = await rp(options)
        .then( function(parseBody){
            console.log(parseBody);
            return parseBody ;
        }).catch( function(err){
            console.log(err);
        });

        return response ;
    }

    //2. POST data to the server-database ...............
    accessInsert( url , data ) {

        var options = {
            method: 'POST' ,
            uri: url ,
            body: data ,
            json: true ,
        }

        var response = await rp(options)
        .then( function(parseBody){
            console.log(parseBody);
            return parseBody ;
        }).catch( function(err){
            console.log(err);
        });

        return response ;
    }

    //3. PUT data on the server database ............
    accessUpdate( url , data ) {
        
        var options = {
            method: 'PUT' ,
            uri: url+"/"+data.id ,
            body: data ,
            json: true ,
        }

        var response = await rp(options)
        .then( function(parseBody){
            console.log(parseBody);
            return parseBody ;
        }).catch( function(err){
            console.log(err);
        });

        return response ;
    }

    //4. DELETE data from the database ............
    accessDelete( url , data ) {
        
        var options = {
            method: 'DELETE' ,
            uri: url+"/"+ data.id ,
            body: data ,
            json: true ,
        }

        var response = await rp(options)
        .then( function(parseBody){
            console.log(parseBody);
            return parseBody ;
        }).catch( function(err){
            console.log(err);
        });

        return response ;
    }
}
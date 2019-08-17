import db from '../db/dbUsers';
import postgres from '../db/db' ;

class ClaimsController {

    //1.1. get all Claims
    getAllClaims(req, res) {
        var userw = postgres('SELECT * FROM claims;');
        return res.status(200).send({
            success: 'true',
            message: 'Claims retrieved successfully',
            userw,
        });
    }

    //1.2. Get specific user using id  
    getClaims(req, res) {
        
        var claims ;
        if( req.params.id ){
            const id = parseInt(req.params.id, 10);
            const sql = 'SELECT * FROM claims WHERE id='+ id +';' ;
            claims = postgres(sql);

        }else if( req.params.userid ){
            const userid = parseInt(req.params.userid, 10);
            const sql = 'SELECT * FROM claims WHERE userid='+ userid +';' ;
            claims = postgres(sql);
        }
        
        if ( claims ) {
            return res.status(200).send({
                success: 'true',
                message: 'Claim retrieved successfully',
                claims,
            });
        }
        
        return res.status(404).send({
            success: 'false',
            message: 'Claim does not exist',
        });
    }


    //2. Add new Claims (New Database entry)
    createClaims(req, res) {

        if (!req.params.userid ) {
            return res.status(400).send({
                success: 'false',
                message: 'userid is required',
            });
        }
        
        if (!req.body.total) {
            return res.status(400).send({
                success: 'false',
                message: 'total is required',
            });
        }else if (!req.body.claims) {
            return res.status(400).send({
                success: 'false',
                message: 'description is required',
            });
        }

        var sql = "INSERT INTO claims (userid, total, description) VALUES (";
        sql += req.params.userid + ",'" ;
        sql += req.body.total + "','" ;
        sql += req.body.description + "');" ;

        var nClaims = postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'Claim added successfully',
            nClaims,
        });
    }


    //3. Update vehicle details using id 
    updateClaims(req, res) {

        var claims ;
        if( req.params.id ){
            var id = parseInt(req.params.id, 10);
            var sql = 'SELECT * FROM claims WHERE id='+ id +';' ;
            claims = postgres(sql);

        }
        
        if ( !claims ) {
            return res.status(404).send({
                success: 'false',
                message: 'Claim not found',
            });
        }

        var update = {
            registration: req.body.registration || claims.registration ,
            description: req.body.description || claims.description ,
        };

        var sql = "UPDATE claims SET " ;
        sql += "registration='"+ update.registration +"', " ;
        sql += "description='"+ update.description +"' "
        sql += " WHERE id="+ id +";" ;

        var vUpdate = postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'Claim update added successfully',
            vUpdate,
        });
    }

    //4. Delete specific Claims using id
    deleteClaims(req, res) {
        var claims ;
        if( req.params.id ){
            var id = parseInt(req.params.id, 10);
            var sql = 'SELECT * FROM claims WHERE id='+ id +';' ;
            claims = postgres(sql);
        }

        if ( !claims ) {
            return res.status(404).send({
                success: 'false',
                message: 'Claim not found',
            });
        }

        sql = 'DELETE FROM claims WHERE id='+ id +';' ;
        postgres(sql);

        return res.status(200).send({
            success: 'true',
            message: 'Claim deleted successfuly',
        });
    }
}

const claimsController = new ClaimsController();
export default claimsController;
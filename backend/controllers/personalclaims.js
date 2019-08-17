import db from '../db/dbUsers';
import postgres from '../db/db' ;

class PersonalClaimsController {

    //1.1. Get all Personal claims
    getAllClaims(req, res) {
        var userw = postgres('SELECT * FROM personalclaims;');
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
            const sql = 'SELECT * FROM personalclaims WHERE id='+ id +';' ;
            claims = postgres(sql);

        }else if( req.params.userid ){
            const userid = parseInt(req.params.userid, 10);
            const sql = 'SELECT * FROM personalclaims WHERE userid='+ userid +';' ;
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
        
        if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'description is required',
            });
        }else if (!req.body.item) {
            return res.status(400).send({
                success: 'false',
                message: 'item is required',
            });
        }else if (!req.body.purpose) {
            return res.status(400).send({
                success: 'false',
                message: 'purpose is required',
            });
        }else if (!req.body.proof) {
            return res.status(400).send({
                success: 'false',
                message: 'proof is required',
            });
        }else if (!req.body.vendor) {
            return res.status(400).send({
                success: 'false',
                message: 'vendor is required',
            });
        }else if (!req.body.date) {
            return res.status(400).send({
                success: 'false',
                message: 'date is required',
            });
        }else if (!req.body.total) {
            return res.status(400).send({
                success: 'false',
                message: 'total is required',
            });
        }

        var sql = "INSERT INTO personalclaims (userid, description, item, purpose, proof, vendor, date, total) VALUES (";
        sql += req.params.userid + ",'" ;
        sql += req.body.description + "','" ;
        sql += req.body.item + "','" ;
        sql += req.body.purpose + "','" ;
        sql += req.body.proof + "','" ;
        sql += req.body.vendor + "','" ;
        sql += req.body.date + "'," ;
        sql += req.body.total + ");" ;

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
            var sql = 'SELECT * FROM personalclaims WHERE id='+ id +';' ;
            claims = postgres(sql);

        }
        
        if ( !claims ) {
            return res.status(404).send({
                success: 'false',
                message: 'Claim not found',
            });
        }

        var update = {
            description: req.body.description || claims.description ,
            item: req.body.item || claims.item ,
            purpose: req.body.purpose || claims.purpose ,
            proof: req.body.proof || claims.proof ,
            vendor: req.body.vendor || claims.vendor ,
            date: req.body.date || claims.date ,
            total: req.body.total || claims.total ,
        };

        var sql = "UPDATE personalclaims SET " ;
        sql += "description="+ update.description +", " ;
        sql += "item="+ update.item +", " ;
        sql += "purpose="+ update.purpose +", " ;
        sql += "proof="+ update.proof +", " ;
        sql += "vendor="+ update.vendor +", " ;
        sql += "date='"+ update.date +"', " ;
        sql += "total="+ update.total +"  " ;
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
            var sql = 'SELECT * FROM personalclaims WHERE id='+ id +';' ;
            claims = postgres(sql);
        }

        if ( !claims ) {
            return res.status(404).send({
                success: 'false',
                message: 'Claim not found',
            });
        }

        sql = 'DELETE FROM personalclaims WHERE id='+ id +';' ;
        postgres(sql);

        return res.status(200).send({
            success: 'true',
            message: 'Claim deleted successfuly',
        });
    }
}

const personalClaimsController = new PersonalClaimsController();
export default personalClaimsController;
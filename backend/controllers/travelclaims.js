import db from '../db/dbUsers';
import postgres from '../db/db' ;

class TravelClaimsController {

    //1.1. get all Claims
    getAllClaims(req, res) {
        var userw = postgres('SELECT * FROM travelclaims;');
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
            const sql = 'SELECT * FROM travelclaims WHERE id='+ id +';' ;
            claims = postgres(sql);

        }else if( req.params.userid ){
            const userid = parseInt(req.params.userid, 10);
            const sql = 'SELECT * FROM travelclaims WHERE userid='+ userid +';' ;
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
        
        if (!req.body.homeclient) {
            return res.status(400).send({
                success: 'false',
                message: 'homeclient is required',
            });
        }else if (!req.body.homeoffice) {
            return res.status(400).send({
                success: 'false',
                message: 'homeoffice is required',
            });
        }else if (!req.body.officeclient) {
            return res.status(400).send({
                success: 'false',
                message: 'officeclient is required',
            });
        }else if (!req.body.odometerbefore) {
            return res.status(400).send({
                success: 'false',
                message: 'odometerbefore is required',
            });
        }else if (!req.body.odometerafter) {
            return res.status(400).send({
                success: 'false',
                message: 'odometerafter is required',
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

        var sql = "INSERT INTO travelclaims (userid, homeclient, homeoffice, officeclient, odometerbefore, odometerafter, date, total) VALUES (";
        sql += req.params.userid + "," ;
        sql += req.body.homeclient + "," ;
        sql += req.body.homeoffice + "," ;
        sql += req.body.officeclient + "," ;
        sql += req.body.odometerbefore + "," ;
        sql += req.body.odometerafter + ",'" ;
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
            var sql = 'SELECT * FROM travelclaims WHERE id='+ id +';' ;
            claims = postgres(sql);

        }
        
        if ( !claims ) {
            return res.status(404).send({
                success: 'false',
                message: 'Claim not found',
            });
        }

        var update = {
            homeclient: req.body.homeclient || claims.homeclient ,
            homeoffice: req.body.homeoffice || claims.homeoffice ,
            officeclient: req.body.officeclient || claims.officeclient ,
            odometerbefore: req.body.odometerbefore || claims.odometerbefore ,
            odometerafter: req.body.odometerafter || claims.odometerafter ,
            date: req.body.date || claims.date ,
            total: req.body.total || claims.total ,
        };

        var sql = "UPDATE travelclaims SET " ;
        sql += "homeclient="+ update.homeclient +", " ;
        sql += "homeoffice="+ update.homeoffice +", " ;
        sql += "officeclient="+ update.officeclient +", " ;
        sql += "odometerbefore="+ update.odometerbefore +", " ;
        sql += "odometerafter="+ update.odometerafter +", " ;
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
            var sql = 'SELECT * FROM travelclaims WHERE id='+ id +';' ;
            claims = postgres(sql);
        }

        if ( !claims ) {
            return res.status(404).send({
                success: 'false',
                message: 'Claim not found',
            });
        }

        sql = 'DELETE FROM travelclaims WHERE id='+ id +';' ;
        postgres(sql);

        return res.status(200).send({
            success: 'true',
            message: 'Claim deleted successfuly',
        });
    }
}

const travelClaimsController = new TravelClaimsController();
export default travelClaimsController;
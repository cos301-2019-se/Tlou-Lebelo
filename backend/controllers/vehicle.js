import db from '../db/dbUsers';
import postgres from '../db/db' ;

class VehicleController {

    //1.1. get all todos
    getAllVehicle(req, res) {
        var userw = postgres('SELECT * FROM vehicle;');
        return res.status(200).send({
            success: 'true',
            message: 'users retrieved successfully',
            users: userw,
        });
    }

    //1.2. Get specific user using id  
    getVehicle(req, res) {
        
        var vehicle ;
        if( req.params.id ){
            const id = parseInt(req.params.id, 10);
            const sql = 'SELECT * FROM vehicle WHERE id='+ id +';' ;
            vehicle = postgres(sql);

        }else if( req.params.userid ){
            const userid = parseInt(req.params.userid, 10);
            const sql = 'SELECT * FROM vehicle WHERE userid='+ userid +';' ;
            vehicle = postgres(sql);
        }
        
        if ( vehicle ) {
            return res.status(200).send({
                success: 'true',
                message: 'Vehicle retrieved successfully',
                vehicle,
            });
        }
        
        return res.status(404).send({
            success: 'false',
            message: 'Vehicle does not exist',
        });
    }


    //2. Add new vehicle (New Database entry)
    createVehicle(req, res) {

        if (!req.params.userid ) {
            return res.status(400).send({
                success: 'false',
                message: 'userid is required',
            });
        }
        
        if (!req.body.registration) {
            return res.status(400).send({
                success: 'false',
                message: 'registration is required',
            });
        }else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'description is required',
            });
        }

        var sql = "INSERT INTO vehicle (userid, registration, description) VALUES (";
        sql += req.params.userid + ",'" ;
        sql += req.body.registration + "','" ;
        sql += req.body.description + "');" ;

        var nVehicle = postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'Vehicle added successfully',
            nVehicle,
        });
    }


    //3. Update vehicle details using id 
    updateVehicle(req, res) {

        var vehicle ;
        if( req.params.id ){
            var id = parseInt(req.params.id, 10);
            var sql = 'SELECT * FROM vehicle WHERE id='+ id +';' ;
            vehicle = postgres(sql);

        }
        
        if ( !vehicle ) {
            return res.status(404).send({
                success: 'false',
                message: 'Vehicle not found',
            });
        }

        var update = {
            registration: req.body.registration || vehicle.registration ,
            description: req.body.description || vehicle.description ,
        };

        var sql = "UPDATE vehicle SET " ;
        sql += "registration='"+ update.registration +"', " ;
        sql += "description='"+ update.description +"' " ;
        sql += " WHERE id="+ id +";" ;

        var vUpdate = postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'Vehicle update added successfully',
            vUpdate,
        });
    }

    //4. Delete specific vehicle using id
    deleteVehicle(req, res) {
        var vehicle ;
        if( req.params.id ){
            var id = parseInt(req.params.id, 10);
            var sql = 'SELECT * FROM vehicle WHERE id='+ id +';' ;
            vehicle = postgres(sql);
        }

        if ( !vehicle ) {
            return res.status(404).send({
                success: 'false',
                message: 'Vehicle not found',
            });
        }

        sql = 'DELETE FROM vehicle WHERE id='+ id +';' ;
        postgres(sql);

        return res.status(200).send({
            success: 'true',
            message: 'Vehicle deleted successfuly',
        });
    }
}

const vehicleController = new VehicleController();
export default vehicleController;
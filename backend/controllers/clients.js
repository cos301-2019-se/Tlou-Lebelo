import db from '../db/dbUsers';
import postgres from '../db/db' ;

class ClientsController {

    //1.1. get all todos
    getAllClients(req, res) {
        var userw = postgres('SELECT * FROM clients;');
        return res.status(200).send({
            success: 'true',
            message: 'clients retrieved successfully',
            users: userw,
        });
    }

    //1.2. Get specific user using id  
    getClients(req, res) {

        const id = parseInt(req.params.id, 10);
        const sql = 'SELECT * FROM clients WHERE id='+ id +';' ;
        var userbyid = postgres(sql);
        
        if ( userbyid ) {
            return res.status(200).send({
                success: 'true',
                message: 'clients retrieved successfully',
                userbyid,
            });
        }
        
        return res.status(404).send({
            success: 'false',
            message: 'Client does not exist',
        });
    }


    //2. Create new user (New Database entry)
    createClients(req, res) {
        if (!req.body.name) {
            return res.status(400).send({
                success: 'false',
                message: 'company is required',
            });
        } else if (!req.body.email) {
            return res.status(400).send({
                success: 'false',
                message: 'email is required',
            });
        }else if (!req.body.contact) {
            return res.status(400).send({
                success: 'false',
                message: 'contact is required',
            });
        }else if (!req.body.location) {
            return res.status(400).send({
                success: 'false',
                message: 'location is required',
            });
        }

        var sql = "INSERT INTO clients (name, email, contact, location) VALUES ('";
        sql += user.name + "','" ;
        sql += user.email + "','" ;
        sql += user.contact + "'," ;
        sql += user.location + ");" ;

        //db.push(user);
        var newClient = postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'Client added successfully',
            newClient,
        });
    }


    //3. Edit specific user using userid 
    updateClients(req, res) {

        const id = parseInt(req.params.id, 10);
        var sql = 'SELECT * FROM clients WHERE id='+ id +';' ;
        var clientbyid = postgres(sql);
        
        if ( !clientbyid ) {
            return res.status(404).send({
                success: 'false',
                message: 'Client not found',
            });
        }

        const update = {
            name: req.body.name || clientbyid.name ,
            email: req.body.email || clientbyid.email ,
            contact: req.body.contact || clientbyid.contact ,
            location: req.body.location || clientbyid.location,
        };

        //db.splice(itemIndex, 1, newUser);

        sql = "UPDATE clients SET " ;
        sql += "name='"+ update.name +"', " ;
        sql += "email='"+ update.email +"', " ;
        sql += "contact='"+ update.contact +"', " ;
        sql += "location="+ update.location +", " ;
        sql += "WHERE id="+ id +";" ;

        postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'Client updated added successfully',
            update,
        });
    }

    //4. Delete specific claim using userid
    deleteClients(req, res) {
        const id = parseInt(req.params.id, 10);
        var sql = 'SELECT * FROM clients WHERE id='+ id +';' ;
        var Found = postgres(sql);
        
        if ( !Found ) {
            return res.status(404).send({
                success: 'false',
                message: 'Client not found',
            });
        }

        //db.splice(itemIndex, 1);
        sql = 'DELETE FROM clients WHERE id='+ id +';' ;
        postgres(sql);

        return res.status(200).send({
            success: 'true',
            message: 'Client deleted successfuly',
        });
    }
}

const clientsController = new ClientsController();
export default clientsController;
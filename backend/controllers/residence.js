import db from '../db/dbUsers';
import postgres from '../db/db' ;

class UsersController {

    //1.1. get all todos
    getAllUsers(req, res) {
        var userw = postgres('SELECT * FROM users;');
        return res.status(200).send({
            success: 'true',
            message: 'users retrieved successfully',
            users: userw,
        });
    }

    //1.2. Get specific user using id  
    getUser(req, res) {
        const id = parseInt(req.params.id, 10);
        const sql = 'SELECT * FROM users WHERE id='+ id +';' ;
        var userbyid = postgres(sql);
        
        if ( userbyid ) {
            return res.status(200).send({
                success: 'true',
                message: 'user retrieved successfully',
                userbyid,
            });
        }
        
        return res.status(404).send({
            success: 'false',
            message: 'user does not exist',
        });
    }


    //2. Create new user (New Database entry)
    createUser(req, res) {
        if (!req.body.email) {
            return res.status(400).send({
                success: 'false',
                message: 'email is required',
            });
        } else if (!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'title is required',
            });
        }else if (!req.body.name) {
            return res.status(400).send({
                success: 'false',
                message: 'name is required',
            });
        }else if (!req.body.surname) {
            return res.status(400).send({
                success: 'false',
                message: 'surname is required',
            });
        }else if (!req.body.contact) {
            return res.status(400).send({
                success: 'false',
                message: 'contact is required',
            });
        }

        /*const user = {
            id: db.length + 1,
            email: req.body.email,
            title: req.body.title,
            name: req.body.name,
            surname: req.body.surname,
            contact: req.body.contact
        };*/

        var sql = "INSERT INTO users (contact, email, name, surname, title) VALUES (";
        sql += user.contact + ",'" ;
        sql += user.email + "','" ;
        sql += user.name + "','" ;
        sql += user.surname + "','" ;
        sql += user.title + "');" ;

        //db.push(user);
        var newuser = postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'User added successfully',
            newuser,
        });
    }


    //3. Edit specific user using userid 
    updateUser(req, res) {

        const id = parseInt(req.params.id, 10);
        var sql = 'SELECT * FROM users WHERE id='+ id +';' ;
        var userbyid = postgres(sql);
        
        if ( !userbyid ) {
            return res.status(404).send({
                success: 'false',
                message: 'User not found',
            });
        }

        const update = {
            email: req.body.email || userbyid.email ,
            title: req.body.title || userbyid.title ,
            name: req.body.name || userbyid.name ,
            surname: req.body.surname || userbyid.surname,
            contact: req.body.contact || userbyid.contact,
        };

        //db.splice(itemIndex, 1, newUser);

        sql = "UPDATE users SET " ;
        sql += "name= '"+ update.name +"', " ;
        sql += "surname= '"+ update.surname +"', " ;
        sql += "email= '"+ update.email +"', " ;
        sql += "title= '"+ update.title +"', " ;
        sql += "contact= "+ update.contact +" ";
        sql += "WHERE CustomerID= "+ id +";" ;

        postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'User updated added successfully',
            update,
        });
    }

    //4. Delete specific claim using userid
    deleteUser(req, res) {
        const id = parseInt(req.params.id, 10);
        var sql = 'SELECT * FROM users WHERE id='+ id +';' ;
        var userbyid = postgres(sql);
        
        if ( !userbyid ) {
            return res.status(404).send({
                success: 'false',
                message: 'User not found',
            });
        }

        //db.splice(itemIndex, 1);
        sql = 'DELETE FROM users WHERE id='+ id +';' ;
        postgres(sql);

        return res.status(200).send({
            success: 'true',
            message: 'User deleted successfuly',
        });
    }
}

const usersController = new UsersController();
export default usersController;
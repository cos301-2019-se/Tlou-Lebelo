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
        db.map((users) => {
        if (users.userid === id) {
            return res.status(200).send({
                success: 'true',
                message: 'user retrieved successfully',
                users,
            });
        }
        });
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

        const user = {
            id: db.length + 1,
            email: req.body.email,
            title: req.body.title,
            name: req.body.name,
            surname: req.body.surname,
            contact: req.body.contact
        };
        var sql = "INSERT INTO users (contact, email, name, surname, title) VALUES (";
        sql += user.contact + ",'" ;
        sql += user.email + "','" ;
        sql += user.name + "','" ;
        sql += user.surname + "','" ;
        sql += user.title + "');" ;

        db.push(user);
        postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'User added successfully',
            user,
        });
    }


    //3. Edit specific user using userid 
    updateUser(req, res) {
        const id = parseInt(req.params.id, 10);
        let userFound;
        let itemIndex;
        db.map((user, index) => {
            if (user.id === id) {
                userFound = user;
                itemIndex = index;
            }
        });

        if (!userFound) {
            return res.status(404).send({
                success: 'false',
                message: 'User not found',
            });
        }

        if (!req.body.email) {
            return res.status(400).send({
                success: 'false',
                message: 'email is required',
            });
        }else if (!req.body.title) {
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

        const newUser = {
            id: userFound.id ,
            email: req.body.email || userFound.email ,
            title: req.body.title || userFound.title ,
            name: req.body.name || userFound.name ,
            surname: req.body.surname || userFound.surname,
            contact: req.body.contact || userFound.contact,
        };

        db.splice(itemIndex, 1, newUser);

        return res.status(201).send({
            success: 'true',
            message: 'User updated added successfully',
            newTodo,
        });
    }

    //4. Delete specific claim using userid
    deleteUser(req, res) {
        const id = parseInt(req.params.id, 10);
        let userFound;
        let itemIndex;
        db.map((user, index) => {
            if (user.id === id) {
                userFound = user;
                itemIndex = index;
            }
        });

        if (!userFound) {
            return res.status(404).send({
                success: 'false',
                message: 'User not found',
            });
        }
        db.splice(itemIndex, 1);

        return res.status(200).send({
            success: 'true',
            message: 'User deleted successfuly',
        });
    }
}

const usersController = new UsersController();
export default usersController;
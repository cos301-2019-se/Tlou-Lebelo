import db from '../db/dbUsers';

class UsersController {

    //1.1. get all todos
    getAllUsers(req, res) {
        return res.status(200).send({
            success: 'true',
            message: 'todos retrieved successfully',
            todos: db,
        });
    }

    //1.2. Get specific todo using id  
    getUser(req, res) {
        const id = parseInt(req.params.id, 10);
        db.map((todo) => {
        if (todo.id === id) {
            return res.status(200).send({
                success: 'true',
                message: 'todo retrieved successfully',
                todo,
            });
        }
        });
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist',
        });
    }


    //2. Post data to todos (New Database entry)
    createUser(req, res) {
        if (!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'title is required',
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'description is required',
            });
        }
        const todo = {
            id: db.length + 1,
            title: req.body.title,
            description: req.body.description,
        };
        db.push(todo);
        return res.status(201).send({
            success: 'true',
            message: 'todo added successfully',
            todo,
        });
    }


    //3. Edit specific claim using id 
    updateUser(req, res) {
        const id = parseInt(req.params.id, 10);
        let todoFound;
        let itemIndex;
        db.map((todo, index) => {
            if (todo.id === id) {
                todoFound = todo;
                itemIndex = index;
            }
        });

        if (!todoFound) {
            return res.status(404).send({
                success: 'false',
                message: 'todo not found',
            });
        }

        if (!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'title is required',
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'description is required',
            });
        }

        const newTodo = {
            id: todoFound.id,
            title: req.body.title || todoFound.title,
            description: req.body.description || todoFound.description,
        };

        db.splice(itemIndex, 1, newTodo);

        return res.status(201).send({
            success: 'true',
            message: 'todo added successfully',
            newTodo,
        });
    }

    //4. Delete specific claim using id
    deleteUser(req, res) {
        const id = parseInt(req.params.id, 10);
        let todoFound;
        let itemIndex;
        db.map((todo, index) => {
            if (todo.id === id) {
                todoFound = todo;
                itemIndex = index;
            }
        });

        if (!todoFound) {
            return res.status(404).send({
                success: 'false',
                message: 'todo not found',
            });
        }
        db.splice(itemIndex, 1);

        return res.status(200).send({
            success: 'true',
            message: 'Todo deleted successfuly',
        });
    }
}

const usersController = new UsersController();
export default usersController;
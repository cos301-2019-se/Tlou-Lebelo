import db from '../db/dbUsers';
import postgres from '../db/db' ;

class SettingsController {

    //1.1. get all todos
    getAllSettings(req, res) {
        var userw = postgres('SELECT * FROM settings;');
        return res.status(200).send({
            success: 'true',
            message: 'users retrieved successfully',
            users: userw,
        });
    }

    //1.2. Get specific user using id  
    getSettings(req, res) {
        const id = parseInt(req.params.id, 10);
        const sql = 'SELECT * FROM settings WHERE id='+ id +';' ;
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


    //2. Create new user settings (New Database entry)
    createSettings(req, res) {

        if (!req.body.submittoemail) {
            return res.status(400).send({
                success: 'false',
                message: 'email is required',
            });
        } 

        const user = {
            submittoemail: req.body.submittoemail,
            autosubmit: req.body.autosubmit || false,
            startdate: req.body.startdate || Date(),
            period: req.body.period || "Monthly",
            skip: req.body.skip || 0 ,
            userid: req.params.userid 
        };

        var sql = "INSERT INTO users (submittoemail, autosubmit, startdate, period, skip, userid) VALUES ('";
        sql += user.submittoemail + "'," ;
        sql += user.autosubmit + ",'" ;
        sql += user.startdate + "','" ;
        sql += user.period + "'," ;
        sql += user.skip + "," ;
        sql += user.userid + ");" ;

        var newusersettings = postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'User added successfully',
            newusersettings,
        });
    }


    //3. Edit specific user using userid 
    updateSettings(req, res) {

        const id = parseInt(req.params.id, 10);
        var sql = 'SELECT * FROM settings WHERE id='+ id +';' ;
        var settingsbyuserid = postgres(sql);
        
        if ( !settingsbyuserid ) {
            return res.status(404).send({
                success: 'false',
                message: 'User not found',
            });
        }

        const update = {
            submittoemail: req.body.submittoemail || settingsbyuserid.submittoemail ,
            autosubmit: req.body.autosubmit || settingsbyuserid.autosubmit ,
            startdate: req.body.startdate || settingsbyuserid.startdate ,
            period: req.body.period || settingsbyuserid.period,
            skip: req.body.skip || settingsbyuserid.skip,
        };

        //db.splice(itemIndex, 1, newUser);

        sql = "UPDATE settings SET " ;
        sql += "submittoemail='"+ update.submittoemail +"', " ;
        sql += "autosubmit="+ update.autosubmit +", " ;
        sql += "startdate='"+ update.startdate +"', " ;
        sql += "period='"+ update.period +"', " ;
        sql += "skip="+ update.skip +" ";
        sql += " WHERE id="+ id +";" ;

        postgres(sql);

        return res.status(201).send({
            success: 'true',
            message: 'Settings update added successfully',
            update,
        });
    }

    //4. Delete specific claim using userid
    deleteSettings(req, res) {
        const id = parseInt(req.params.id, 10);
        var sql = 'SELECT * FROM settings WHERE id='+ id +';' ;
        var settingsbyuserid = postgres(sql);
        
        if ( !settingsbyuserid ) {
            return res.status(404).send({
                success: 'false',
                message: 'Settings not found',
            });
        }

        //db.splice(itemIndex, 1);
        sql = 'DELETE FROM settings WHERE id='+ id +';' ;
        postgres(sql);

        return res.status(200).send({
            success: 'true',
            message: 'Settings deleted successfuly',
        });
    }
}

const settingsController = new SettingsController();
export default settingsController;
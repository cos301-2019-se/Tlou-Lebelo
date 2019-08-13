import express from 'express';
import path from 'path' ;

import usersController from '../controllers/users.js';
import vehicleController from '../controllers/vehicle.js';
import residenceController from '../controllers/residence.js'
import claimsController from '../controllers/claims.js';
import settingsController from '../controllers/settings.js'

const router = express.Router();

//1. Users Controllers 
router.get('/api/v1/user', usersController.getAllUsers);
router.get('/api/v1/user/:id', usersController.getUser);
router.post('/api/v1/user', usersController.createUser);
router.put('/api/v1/user/:id', usersController.updateUser);
router.delete('/api/v1/user/:id', usersController.deleteUser);

//2. Vehicle Controllers
router.get('/api/v1/vehicle', vehicleController.getAllVehicle);
router.get('/api/v1/vehicle/:id', vehicleController.getVehicle);
router.post('/api/v1/vehicle', vehicleController.createVehicle);
router.put('/api/v1/vehicle/:id', vehicleController.updateVehicle);
router.delete('/api/v1/vehicle/:id', vehicleController.deleteVehicle);

//3. Residence Controllers
router.get('/api/v1/residence', residenceController.getAllResidence);
router.get('/api/v1/residence/:id', residenceController.getResidence);
router.post('/api/v1/residence', residenceController.createResidence);
router.put('/api/v1/residence/:id', residenceController.updateResidence);
router.delete('/api/v1/residence/:id', residenceController.deleteResidence);

//4. Claims Controllers
router.get('/api/v1/claim', claimsController.getAllClaims);
router.get('/api/v1/claim/:id', claimsController.getClaim);
router.post('/api/v1/claim', claimsController.createClaim);
router.put('/api/v1/claim/:id', claimsController.updateClaim);
router.delete('/api/v1/claim/:id', claimsController.deleteClaim);

//5. Settings Controllers
router.get('/api/v1/setting', settingsController.getAllSettings);
router.get('/api/v1/setting/:id', settingsController.getSettings);
router.post('/api/v1/setting', settingsController.createSettings);
router.put('/api/v1/setting/:id', settingsController.updateSettings);
router.delete('/api/v1/setting/:id', settingsController.deleteSettings);

//3. User Interface
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/../ui/view/home.html'));
});

router.get('/claimform', function(req,res){
    res.sendFile(path.join(__dirname+'./users.html'));
});

export default router;
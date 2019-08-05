import express from 'express';
import claimsController from '../controllers/claims.js';
import usersController from '../controllers/users.js';

const router = express.Router();

//1. Users Controllers 
router.get('/api/v1/user', usersController.getAllUsers);
router.get('/api/v1/user/:id', usersController.getUser);
router.post('/api/v1/user', usersController.createUser);
router.put('/api/v1/user/:id', usersController.updateUser);
router.delete('/api/v1/user/:id', usersController.deleteUser);

//2. Claims Controllers
router.get('/api/v1/claim', claimsController.getAllClaims);
router.get('/api/v1/claim/:id', claimsController.getClaim);
router.post('/api/v1/claim', claimsController.createClaim);
router.put('/api/v1/claim/:id', claimsController.updateClaim);
router.delete('/api/v1/claim/:id', claimsController.deleteClaim);

export default router;
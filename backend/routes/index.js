import express from 'express';
import claimsController from '../controller/claims';

const router = express.Router();

//1. Users Controllers 

//2. Claims Controllers
router.get('/api/v1/claim', claimsController.getAllClaims);
router.get('/api/v1/claim/:id', claimsController.getClaim);
router.post('/api/v1/claim', claimsController.createClaim);
router.put('/api/v1/claim/:id', claimsController.updateClaim);
router.delete('/api/v1/claim/:id', claimsController.deleteClaim);

export default router;
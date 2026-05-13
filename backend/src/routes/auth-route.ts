import express, { Router } from 'express';
import { signin, signup } from '../controllers/user-auth-controller.js';
import { userDataValidation } from '../middlewares/user-Schema-Zod-Validation.js';

const router = Router();


router.post('/signup',userDataValidation,signup);
router.post('/login',signin);


export default router;
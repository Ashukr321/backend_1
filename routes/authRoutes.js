import express from 'express';
const authRouter  = express.Router();
import { signup } from '../controllers/authControllers.js';
// route 
authRouter.post('/signup',signup)

export default authRouter;
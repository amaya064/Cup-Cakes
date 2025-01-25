import express from 'express';
import { getUserByEmail, signin, signupuser } from '../controller/user.controller.js';

const router = express.Router();

router.post('/signup', signupuser);
router.post("/signin",signin)
router.get('/users', getUserByEmail);

export default router;

import express from 'express';
import { signin, signupuser } from '../controller/user.controller.js';

const router = express.Router();

router.post('/signup', signupuser);
router.post("/signin",signin)

export default router;

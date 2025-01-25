
import express from 'express';
import { processPayment } from '../controller/payment.controller.js';

const router = express.Router();

router.post('/process-payment', processPayment);

export default router;

import express from 'express';
import { createMarket, getAllMarkets } from '../controllers/marketController.js';

const router = express.Router();


router.post('/', createMarket);


router.get('/', getAllMarkets);

export default router;

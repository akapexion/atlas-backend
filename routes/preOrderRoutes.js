import express from 'express';
import {
  createPreOrder,
  getPreOrders
} from '../controllers/preOrderController.js';

const router = express.Router();


router.post('/', createPreOrder);


router.get('/', getPreOrders);

export default router;
 
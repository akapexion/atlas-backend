import express from 'express';
import {
  createReview,
  getFarmerReviews
} from '../controllers/reviewController.js';

const router = express.Router();


router.post('/', createReview);


router.get('/farmer/:farmerId', getFarmerReviews);

export default router;

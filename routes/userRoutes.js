import express from 'express';
import {
  registerUser,
  getUserProfile
} from '../controllers/userController.js';

const router = express.Router();


router.post('/register', registerUser);


router.get('/:id', getUserProfile);

export default router;

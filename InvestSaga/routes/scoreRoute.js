import express from 'express';

import { requireSignIn } from '../middlewares/authMiddleware.js';
import { getGlobalScoreController, updateHangmanController, updateScoreController, updateTriviaController } from '../controllers/scoreController.js';

const router = express.Router();

router.put('/update-score', updateScoreController);

router.put('/update-trivia-score', updateTriviaController);
router.put('/update-hangman-score', updateHangmanController);

router.get('/global-score/:id', getGlobalScoreController);

export default router;
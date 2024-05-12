import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  learningScore: {
    type: Number,
    default: 0
  },
  hangmanScore: {
    type: Number,
    default: 0
  },
  wordsearchScore: {
    type: Number,
    default: 0
  },
  triviaScore: {
    type: Number,
    default: 0
  },
  finalScore: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Score', scoreSchema);

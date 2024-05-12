import scoreModel from "../models/scoreModel.js";


//to update wordsearch score
export const updateScoreController = async (req, res) => {
  try {
    const { userId,wordsearchScore} = req.body;

    // Fetch the user's current score document
    let userScore = await scoreModel.findOne({ userId });

    // If the user's score document doesn't exist, create a new one
    if (!userScore) {
      userScore = new scoreModel({ userId });
    }
    
    // Include other scores from the database in the request body
    const { learningScore, hangmanScore, triviaScore } = userScore;

    // Update the wordsearchScore in the score document
    userScore.wordsearchScore = wordsearchScore;

    // Calculate the finalScore based on the updated scores
    userScore.finalScore = learningScore + hangmanScore + wordsearchScore + triviaScore;

    // Save the updated score document
    await userScore.save();


    /*
    const updatedScore = await scoreModel.findOneAndUpdate(
      { userId },
      {
        learningScore,
        hangmanScore,
        wordsearchScore,
        triviaScore,
        finalScore: learningScore + hangmanScore + wordsearchScore + triviaScore
      },
      { new: true, upsert: true }
    );*/

    res.status(200).json({
      success: true,
      message: 'WordSearch Score updated successfully',
      score: userScore
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error updating score',
      error: error.message
    });
  }
};


//to update trivia score 
export const updateTriviaController = async (req, res) => {
  try {
    const { userId,triviaScore} = req.body;

    let userScore = await scoreModel.findOne({ userId });

    if (!userScore) {
      userScore = new scoreModel({ userId });
    }
    
    const { learningScore, hangmanScore, wordsearchScore } = userScore;

    userScore.triviaScore = triviaScore;

    userScore.finalScore = learningScore + hangmanScore + wordsearchScore + triviaScore;

    // Save the updated score document
    await userScore.save();

    res.status(200).json({
      success: true,
      message: 'Trivia Score updated successfully',
      score: userScore
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error updating score',
      error: error.message
    });
  }
};

//to update hangmanscore 
export const updateHangmanController = async (req, res) => {
  try {
    const { userId,hangmanScore} = req.body;

    let userScore = await scoreModel.findOne({ userId });

    if (!userScore) {
      userScore = new scoreModel({ userId });
    }
    
    const { learningScore, triviaScore, wordsearchScore } = userScore;

    userScore.hangmanScore = hangmanScore;

    userScore.finalScore = learningScore + hangmanScore + wordsearchScore + triviaScore;

    // Save the updated score document
    await userScore.save();

    res.status(200).json({
      success: true,
      message: 'Hangman Score updated successfully',
      score: userScore
    });
  } catch (error) {

    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error updating score',
      error: error.message
    });
    
  }
};



// to get scores
export const getGlobalScoreController = async (req, res) => {
  try {
    const userId = req.params.id;
    const globalScore = await scoreModel.findOne({ userId });
    
    if (!globalScore) {
      return res.status(404).json({
        success: false,
        message: 'Score not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Global score retrieved successfully',
      globalScore
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving global score',
      error: error.message
    });
  }
};

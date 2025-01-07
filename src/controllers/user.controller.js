const SELECT = require("../constants/mongooseSelect");
const Quiz = require("../models/quiz.model");




module.exports = {


    // answear a question

    answerAquiz: async (req, res) => {

        const { id } = req.params;
        const { options } = req.body;
    
        const aQuiz = await Quiz.findOne({ _id: id });        
    
        const quizResult = aQuiz.answer === options 
            ? await Quiz.updateOne({ _id: id }, { $set: { isAnswer: 1, userAnswer : options } })
            : await Quiz.updateOne({ _id: id }, { $set: { isAnswer: 2, userAnswer : options  } });
    
        res.status(201).json({ message: "Question updated successfully", quizResult });
    },
    

    // show a question

      getAQuiz : async (req, res) => {
      
        const { page } = req.query;
        const limit = 1;
        const skip = (page - 1) * limit;

        const quizCounts = await Quiz.countDocuments();
          
        const aQuiz = await Quiz.find()
        .limit(limit)
        .skip(skip);
        
       res.status(200).json({ message: "Quesion get successfully",  aQuiz, quizCounts });
    },


     // get all questions

     getAllQuizzes : async (req, res) => {
      
        const allQuiz = await Quiz.find()
        .select(SELECT);

        const quizCounts = await Quiz.countDocuments();

       res.status(200).json({message: "Quesions get successfully", allQuiz, quizCounts});
    },


}
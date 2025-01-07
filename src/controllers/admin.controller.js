const Quiz = require("../models/quiz.model");




module.exports = {


    // create a question

       createAquiz : async (req, res) => {
        
        const { title, question, options, answer, explanation } = req.body;

        const maxCountQuiz = await Quiz.findOne().sort({ count: -1 }).select('count');
        const nextCount = maxCountQuiz ? maxCountQuiz.count + 1 : 1;
    
        const newQuiz = new Quiz({
          title,
          question,
          options,
          answer,
          explanation,
          count: nextCount,
        });
    
        await newQuiz.save();
    
        res.status(201).json({
          message: "Question created successfully",
          newQuiz,
        });
      },

    // get all questions

      getAllQuizzes : async (req, res) => {
      
        const allQuiz = await Quiz.find();
        

       res.status(200).json({message: "Quesion get successfully", allQuiz});
    },



}
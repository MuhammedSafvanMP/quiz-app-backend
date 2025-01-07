const { answerAquiz, getAQuiz, getAllQuizzes } = require("../controllers/user.controller");
const trycatch = require("../utils/error/try.catch");

const router = require("express").Router();



 router.get("/users/quizzes", trycatch( getAQuiz ));
 router.get("/users/quizzes/answers", trycatch( getAllQuizzes ));
 router.put("/users/quizzes/:id",  trycatch( answerAquiz ));

 module.exports = router;
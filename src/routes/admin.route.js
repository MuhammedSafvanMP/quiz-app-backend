const {  createAquiz, getAllQuizzes } = require("../controllers/admin.controller");

const router = require("express").Router();



 router.route("/admin/quizzes")
 .get(getAllQuizzes)
 .post(createAquiz)

 module.exports = router;
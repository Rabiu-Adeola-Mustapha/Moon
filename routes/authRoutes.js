const AuthRouter = require("express").Router();
const{Login,Register} = require("../controllers/authController")


AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);



module.exports = AuthRouter;
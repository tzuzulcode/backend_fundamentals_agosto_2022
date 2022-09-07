const {Router} = require("express")
const AuthController = require("../controllers/auth")

const router = Router()

// Obtener los formularios:
router.get("/auth/login",AuthController.getLoginView)
router.get("/auth/signup",AuthController.getSignUpView)

// Recibir data de los usuarios
router.post("/api/auth/login",AuthController.login)
router.post("/api/auth/signup",AuthController.signup)


module.exports = router
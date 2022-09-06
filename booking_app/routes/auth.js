const {Router} = require("express")
const AuthController = require("../controllers/auth")

const router = Router()

// Obtener los formularios:
router.get("/auth/login",AuthController.login)
router.get("/auth/signup",AuthController.signup)

// Recibir data de los usuarios
router.get("/api/auth/login",AuthController.signup)
router.get("/api/auth/signup",AuthController.signup)


module.exports = router
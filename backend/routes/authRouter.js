import { Router } from "express";
import { logout, register, login, profile } from "../controllers/authController.js";
import { authRequire } from "../midlewares/validateToken.js";
import { validateSchema } from "../midlewares/validatorMidle.js";
import { loginSchema, registerSchema } from "../schemas/authSchema.js";

const router = Router()

router.post('/register', validateSchema(registerSchema), register)

router.post('/login', validateSchema(loginSchema), login)

router.post('/logout', logout)

router.get('/profile', authRequire, profile)

export default router
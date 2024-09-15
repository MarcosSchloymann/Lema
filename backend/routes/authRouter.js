import { Router } from "express";
import { logout, register, login, profile } from "../controllers/authController.js";
import { authRequire } from "../midlewares/validateToken.js";

const router = Router()

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

router.get('/profile', authRequire, profile)

export default router
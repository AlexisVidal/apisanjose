import { Router } from "express";
import {
    getAuth
} from '../controllers/login.controller'
const router = Router();

router.post('/autenticar', getAuth)
export default router
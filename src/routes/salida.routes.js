import { Router } from "express";
import {
    getSalidas,
    getSalidasByPeriodo,
    getDetalleSalidas,
    getDetalleSalidasByFk
} from '../controllers/salida.controller'
const router = Router();

router.get('/salida', getSalidas)
router.post('/salida', getSalidasByPeriodo)
router.get('/detalleSalida', getDetalleSalidas)
router.post('/detalleSalida', getDetalleSalidasByFk)

export default router
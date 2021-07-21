import { Router } from "express";
import {
    getSalidas,
    getSalidasByPeriodo,
    getDetalleSalidas,
    getDetalleSalidasByFk
} from '../controllers/salida.controller'
const router = Router();

router.post('/salida', getSalidas)
router.post('/salidaPeriodo', getSalidasByPeriodo)
router.post('/detalleSalida', getDetalleSalidas)
router.post('/detalleSalidaID', getDetalleSalidasByFk)

export default router
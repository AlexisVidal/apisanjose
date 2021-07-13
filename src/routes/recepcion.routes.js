import { Router } from "express";
import {
    getIngresos,
    getIngresoByPeriodo,
    getDetalleIngresos,
    getDetalleIngresoByFk
} from '../controllers/recepcion.controller'
const router = Router();

router.get('/recepcion', getIngresos)
router.post('/recepcion', getIngresoByPeriodo)
router.get('/detalleRecepcion', getDetalleIngresos)
router.post('/detalleRecepcion', getDetalleIngresoByFk)

export default router
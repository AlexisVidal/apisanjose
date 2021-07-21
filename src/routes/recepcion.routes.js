import { Router } from "express";
import {
    getIngresos,
    getIngresoByPeriodo,
    getDetalleIngresos,
    getDetalleIngresoByFk
} from '../controllers/recepcion.controller'
const router = Router();

router.post('/recepcion', getIngresos)
router.post('/recepcionPeriodo', getIngresoByPeriodo)
router.post('/detalleRecepcion', getDetalleIngresos)
router.post('/detalleRecepcionID', getDetalleIngresoByFk)

export default router
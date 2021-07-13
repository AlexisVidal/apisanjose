import { Router } from "express";
import {
    getIngresoTunel,
    getIngresoTunelByPeriodo,
    getDetalleIngresoTunel,
    getDetalleIngresoTunelByFk
} from '../controllers/ingresotunel.controller'
const router = Router();

router.get('/ingresoTunel', getIngresoTunel)
router.post('/ingresoTunel', getIngresoTunelByPeriodo)
router.get('/detalleIngresoTunel', getDetalleIngresoTunel)
router.post('/detalleIngresoTunel', getDetalleIngresoTunelByFk)

export default router
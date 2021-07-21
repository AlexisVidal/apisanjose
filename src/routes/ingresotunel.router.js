import { Router } from "express";
import {
    getIngresoTunel,
    getIngresoTunelByPeriodo,
    getDetalleIngresoTunel,
    getDetalleIngresoTunelByFk
} from '../controllers/ingresotunel.controller'
const router = Router();

router.get('/ingresoTunel', getIngresoTunel)
router.post('/ingresoTunelPeriodo', getIngresoTunelByPeriodo)
router.get('/detalleIngresoTunel', getDetalleIngresoTunel)
router.post('/detalleIngresoTunelID', getDetalleIngresoTunelByFk)

export default router
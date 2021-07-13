import { Router } from "express";
import {
    getRegistrosPaleta,
    getRegistrosPaletaByPeriodo,
    getDetalleRegistrosPaleta,
    getDetalleRegistrosPaletaByFk
} from '../controllers/paleta.controller'
const router = Router();

router.get('/paleta', getRegistrosPaleta)
router.post('/paleta', getRegistrosPaletaByPeriodo)
router.get('/detallePaleta', getDetalleRegistrosPaleta)
router.post('/detallePaleta', getDetalleRegistrosPaletaByFk)

export default router
import { Router } from "express";
import {
    getRegistrosPaleta,
    getRegistrosPaletaByPeriodo,
    getDetalleRegistrosPaleta,
    getDetalleRegistrosPaletaByFk
} from '../controllers/paleta.controller'
const router = Router();

router.post('/paleta', getRegistrosPaleta)
router.post('/paletaPeriodo', getRegistrosPaletaByPeriodo)
router.post('/detallePaleta', getDetalleRegistrosPaleta)
router.post('/detallePaletaID', getDetalleRegistrosPaletaByFk)

export default router
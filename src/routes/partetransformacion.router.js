import { Router } from "express";
import {
    getParteTransformacion,
    getParteTransformacionByPeriodo,
    getDetalleParteTransformacionByFk,
    getDDetalleParteTransformacionByFk,
    getDDDetalleParteTransformacionByFk,
    getDetalleParteTransformacionCostoByFk,
    getDetalleParteTransformacionDistribuidoByFk,
    getDetalleParteTransformacionReferenciaByFk
} from '../controllers/partetransformacion.controller'
const router = Router();

router.post('/parteTransformacion', getParteTransformacion)
router.post('/parteTransformacionPeriodo', getParteTransformacionByPeriodo)
router.post('/detalleparteTransformacion', getDetalleParteTransformacionByFk)
router.post('/ddetalleparteTransformacion', getDDetalleParteTransformacionByFk)
router.post('/dddetalleparteTransformacion', getDDDetalleParteTransformacionByFk)
router.post('/detalleparteTransformacionCosto', getDetalleParteTransformacionCostoByFk)
router.post('/detalleparteTransformacionDistribuido', getDetalleParteTransformacionDistribuidoByFk)
router.post('/detalleparteTransformacionReferencia', getDetalleParteTransformacionReferenciaByFk)
export default router
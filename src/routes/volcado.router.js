import { Router } from "express";
import {
    getVolcados,
    getVolcadosByPeriodo,
    getDetalleVolcadosLinea,
    getDetalleVolcadosLineaByFk,
    getDetalleVolcadosConsumidor,
    getDetalleVolcadosConsumidorByFk
} from '../controllers/volcado.controller'
const router = Router();

router.get('/volcado', getVolcados)
router.post('/volcado', getVolcadosByPeriodo)
router.get('/detalleVolcadoLinea', getDetalleVolcadosLinea)
router.post('/detalleVolcadoLinea', getDetalleVolcadosLineaByFk)
router.get('/detalleVolcadoConsumidor', getDetalleVolcadosConsumidor)
router.post('/detalleVolcadoConsumidor', getDetalleVolcadosConsumidorByFk)

export default router
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

router.post('/volcado', getVolcados)
router.post('/volcadoPeriodo', getVolcadosByPeriodo)
router.post('/detalleVolcadoLinea', getDetalleVolcadosLinea)
router.post('/detalleVolcadoLineaID', getDetalleVolcadosLineaByFk)
router.post('/detalleVolcadoConsumidor', getDetalleVolcadosConsumidor)
router.post('/detalleVolcadoConsumidorID', getDetalleVolcadosConsumidorByFk)

export default router
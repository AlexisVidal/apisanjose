import { Router } from "express";
import {
    getPackingList,
    getPackingListByPeriodo,
    getDetallePackingList,
    getDetallePackingListByFk,
    getDDetallePackingList,
    getDDetallePackingListByFk,
    getDDistribucionPaletaContenedor,
    getDDistribucionPaletaContenedorByFk
} from '../controllers/packinglist.controller'
const router = Router();

router.post('/packinglist', getPackingList)
router.post('/packinglistPeriodo', getPackingListByPeriodo)
router.post('/detallePackinglist', getDetallePackingList)
router.post('/detallePackinglistID', getDetallePackingListByFk)
router.post('/ddetallePackinglist', getDDetallePackingList)
router.post('/ddetallePackinglistID', getDDetallePackingListByFk)
router.post('/ddetalleDistribucionPaleta', getDDistribucionPaletaContenedor)
router.post('/ddetalleDistribucionPaletaID', getDDistribucionPaletaContenedorByFk)
export default router
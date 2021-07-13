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

router.get('/packinglist', getPackingList)
router.post('/packinglist', getPackingListByPeriodo)
router.get('/detallePackinglist', getDetallePackingList)
router.post('/detallePackinglist', getDetallePackingListByFk)
router.get('/ddetallePackinglist', getDDetallePackingList)
router.post('/ddetallePackinglist', getDDetallePackingListByFk)
router.get('/ddetalleDistribucionPaleta', getDDistribucionPaletaContenedor)
router.post('/ddetalleDistribucionPaleta', getDDistribucionPaletaContenedorByFk)
export default router
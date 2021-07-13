import { Router } from "express";
import {
    getPrePackingList,
    getPrePackingListByPeriodo,
    getDetallePrePackingList,
    getDetallePrePackingListByFk,
    getDDetallePrePackingList,
    getDDetallePrePackingListByFk
} from '../controllers/prepackinglist.controller'
const router = Router();

router.get('/prepackinglist', getPrePackingList)
router.post('/prepackinglist', getPrePackingListByPeriodo)
router.get('/detallePrepackinglist', getDetallePrePackingList)
router.post('/detallePrepackinglist', getDetallePrePackingListByFk)
router.get('/ddetallePrepackinglist', getDDetallePrePackingList)
router.post('/ddetallePrepackinglist', getDDetallePrePackingListByFk)

export default router
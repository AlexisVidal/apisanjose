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

router.post('/prepackinglist', getPrePackingList)
router.post('/prepackinglistPeriodo', getPrePackingListByPeriodo)
router.post('/detallePrepackinglist', getDetallePrePackingList)
router.post('/detallePrepackinglistID', getDetallePrePackingListByFk)
router.post('/ddetallePrepackinglist', getDDetallePrePackingList)
router.post('/ddetallePrepackinglistID', getDDetallePrePackingListByFk)

export default router
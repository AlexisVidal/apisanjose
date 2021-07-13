import { getConnection, querys, sql } from '../database'

export const getPrePackingList = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getPrePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getPrePackingListByPeriodo = async(req, res) => {
    let PERIODO = req.query.PERIODO;
    if (PERIODO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("PERIODO", sql.VarChar, PERIODO)
            .query(querys.getPrePackingListByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetallePrePackingList = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetallePrePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetallePrePackingListByFk = async(req, res) => {
    let IDPACKINGLIST = req.query.IDPACKINGLIST;
    if (IDPACKINGLIST == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDPACKINGLIST", sql.VarChar, IDPACKINGLIST)
            .query(querys.getDetallePrePackingListByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDetallePrePackingList = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDDetallePrePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDetallePrePackingListByFk = async(req, res) => {
    let IDPACKINGLIST = req.query.IDPACKINGLIST;
    if (IDPACKINGLIST == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDPACKINGLIST", sql.VarChar, IDPACKINGLIST)
            .query(querys.getDDetallePrePackingListByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
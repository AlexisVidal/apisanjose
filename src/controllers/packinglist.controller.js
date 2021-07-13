import { getConnection, querys, sql } from '../database'

export const getPackingList = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getPackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getPackingListByPeriodo = async(req, res) => {
    let PERIODO = req.query.PERIODO;
    if (PERIODO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("PERIODO", sql.VarChar, PERIODO)
            .query(querys.getPackingListByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetallePackingList = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetallePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetallePackingListByFk = async(req, res) => {
    let IDPACKINGLIST = req.query.IDPACKINGLIST;
    if (IDPACKINGLIST == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDPACKINGLIST", sql.VarChar, IDPACKINGLIST)
            .query(querys.getDetallePackingListByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDetallePackingList = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDDetallePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDetallePackingListByFk = async(req, res) => {
    let IDPACKINGLIST = req.query.IDPACKINGLIST;
    if (IDPACKINGLIST == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDPACKINGLIST", sql.VarChar, IDPACKINGLIST)
            .query(querys.getDDetallePackingListByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDistribucionPaletaContenedor = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDDistribucionPaletaContenedor);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDistribucionPaletaContenedorByFk = async(req, res) => {
    let IDPACKINGLIST = req.query.IDPACKINGLIST;
    if (IDPACKINGLIST == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDPACKINGLIST", sql.VarChar, IDPACKINGLIST)
            .query(querys.getDDistribucionPaletaContenedorByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
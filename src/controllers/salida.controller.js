import { getConnection, querys, sql } from '../database'

export const getSalidas = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getSalidas);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getSalidasByPeriodo = async(req, res) => {
    let PERIODO = req.query.PERIODO;
    if (PERIODO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("PERIODO", sql.VarChar, PERIODO)
            .query(querys.getSalidasByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleSalidas = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetalleSalidas);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleSalidasByFk = async(req, res) => {
    let IDINGRESOSALIDAALM = req.query.IDINGRESOSALIDAALM;
    if (IDINGRESOSALIDAALM == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAALM", sql.VarChar, IDINGRESOSALIDAALM)
            .query(querys.getDetalleSalidasByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
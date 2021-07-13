import { getConnection, querys, sql } from '../database'

export const getRegistrosPaleta = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getRegistrosPaleta);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getRegistrosPaletaByPeriodo = async(req, res) => {
    let PERIODO = req.query.PERIODO;
    if (PERIODO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("PERIODO", sql.VarChar, PERIODO)
            .query(querys.getRegistrosPaletaByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleRegistrosPaleta = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetalleRegistrosPaleta);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleRegistrosPaletaByFk = async(req, res) => {
    let IDREGISTROPALETA = req.query.IDREGISTROPALETA;
    if (IDREGISTROPALETA == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDREGISTROPALETA", sql.VarChar, IDREGISTROPALETA)
            .query(querys.getDetalleRegistrosPaletaByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
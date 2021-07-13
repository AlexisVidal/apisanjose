import { getConnection, querys, sql } from '../database'

export const getVolcados = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getVolcados);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getVolcadosByPeriodo = async(req, res) => {
    let PERIODO = req.query.PERIODO;
    if (PERIODO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("PERIODO", sql.VarChar, PERIODO)
            .query(querys.getVolcadosByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleVolcadosLinea = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetalleVolcadosLinea);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleVolcadosLineaByFk = async(req, res) => {
    let idordenvolcado = req.query.idordenvolcado;
    if (idordenvolcado == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("idordenvolcado", sql.VarChar, idordenvolcado)
            .query(querys.getDetalleVolcadosLineaByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getDetalleVolcadosConsumidor = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetalleVolcadosConsumidor);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleVolcadosConsumidorByFk = async(req, res) => {
    let idordenvolcado = req.query.idordenvolcado;
    if (idordenvolcado == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("idordenvolcado", sql.VarChar, idordenvolcado)
            .query(querys.getDetalleVolcadosConsumidorByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
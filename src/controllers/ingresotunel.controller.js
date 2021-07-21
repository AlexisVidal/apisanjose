import { getConnection, querys, sql } from '../database'
var jwt = require('jsonwebtoken')
import { config } from 'dotenv'
config();
export const getIngresoTunel = async(req, res) => {
    let token = req.query.token;
    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return
    }
    token = token.replace('Bearer ', '')
    jwt.verify(token, process.env.secret, function(err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
            return
        }
    })
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getIngresoTunel);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getIngresoTunelByPeriodo = async(req, res) => {
    let token = req.query.token;
    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return
    }
    token = token.replace('Bearer ', '')
    jwt.verify(token, process.env.secret, function(err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
            return
        }
    })
    let PERIODO = req.query.PERIODO;
    if (PERIODO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("PERIODO", sql.VarChar, PERIODO)
            .query(querys.getIngresoTunelByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleIngresoTunel = async(req, res) => {
    let token = req.query.token;
    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return
    }
    token = token.replace('Bearer ', '')
    jwt.verify(token, process.env.secret, function(err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
            return
        }
    })
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetalleIngresoTunel);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleIngresoTunelByFk = async(req, res) => {
    let token = req.query.token;
    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return
    }
    token = token.replace('Bearer ', '')
    jwt.verify(token, process.env.secret, function(err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
            return
        }
    })
    let IDINGRESOSALIDATUNEL = req.query.IDINGRESOSALIDATUNEL;
    if (IDINGRESOSALIDATUNEL == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDATUNEL", sql.VarChar, IDINGRESOSALIDATUNEL)
            .query(querys.getDetalleIngresoTunelByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
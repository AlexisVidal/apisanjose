import { getConnection, querys, sql } from '../database'
var jwt = require('jsonwebtoken')
import { config } from 'dotenv'
config();
export const getIngresos = async(req, res) => {
    try {
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
        const pool = await getConnection();
        const result = await pool.request().query(querys.getIngresos);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getIngresoByPeriodo = async(req, res) => {
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
            .query(querys.getIngresoByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleIngresos = async(req, res) => {
    try {
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
        const pool = await getConnection();
        const result = await pool.request().query(querys.getDetalleIngresos);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleIngresoByFk = async(req, res) => {
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
    let IDINGRESOSALIDAALM = req.query.IDINGRESOSALIDAALM;
    if (IDINGRESOSALIDAALM == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAALM", sql.VarChar, IDINGRESOSALIDAALM)
            .query(querys.getDetalleIngresoByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
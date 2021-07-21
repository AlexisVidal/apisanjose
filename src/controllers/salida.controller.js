import { getConnection, querys, sql } from '../database'
var jwt = require('jsonwebtoken')
import { config } from 'dotenv'
config();

export const getSalidas = async(req, res) => {
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
        const result = await pool.request().query(querys.getSalidas);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getSalidasByPeriodo = async(req, res) => {
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
            .query(querys.getSalidasByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleSalidas = async(req, res) => {
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
        const result = await pool.request().query(querys.getDetalleSalidas);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleSalidasByFk = async(req, res) => {
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
            .query(querys.getDetalleSalidasByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
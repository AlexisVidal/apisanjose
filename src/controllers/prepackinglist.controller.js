import { getConnection, querys, sql } from '../database'
var jwt = require('jsonwebtoken')
import { config } from 'dotenv'
config();
export const getPrePackingList = async(req, res) => {
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
        const result = await pool.request().query(querys.getPrePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getPrePackingListByPeriodo = async(req, res) => {
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
            .query(querys.getPrePackingListByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetallePrePackingList = async(req, res) => {
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
        const result = await pool.request().query(querys.getDetallePrePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetallePrePackingListByFk = async(req, res) => {
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
        const result = await pool.request().query(querys.getDDetallePrePackingList);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDetallePrePackingListByFk = async(req, res) => {
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
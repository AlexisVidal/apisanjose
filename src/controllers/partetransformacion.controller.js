import { getConnection, querys, sql } from '../database'
var jwt = require('jsonwebtoken')
import { config } from 'dotenv'
config();
export const getParteTransformacion = async(req, res) => {
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
        const result = await pool.request().query(querys.getParteTransformacion);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getParteTransformacionByPeriodo = async(req, res) => {
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
            .query(querys.getParteTransformacionByPeriodo);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleParteTransformacionByFk = async(req, res) => {
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
    let IDINGRESOSALIDAPROCESO = req.query.IDINGRESOSALIDAPROCESO;
    if (IDINGRESOSALIDAPROCESO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAPROCESO", sql.VarChar, IDINGRESOSALIDAPROCESO)
            .query(querys.getDetalleParteTransformacionByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDetalleParteTransformacionByFk = async(req, res) => {
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
    let IDINGRESOSALIDAPROCESO = req.query.IDINGRESOSALIDAPROCESO;
    if (IDINGRESOSALIDAPROCESO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAPROCESO", sql.VarChar, IDINGRESOSALIDAPROCESO)
            .query(querys.getDDetalleParteTransformacionByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDDDetalleParteTransformacionByFk = async(req, res) => {
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
    let IDINGRESOSALIDAPROCESO = req.query.IDINGRESOSALIDAPROCESO;
    if (IDINGRESOSALIDAPROCESO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAPROCESO", sql.VarChar, IDINGRESOSALIDAPROCESO)
            .query(querys.getDDDetalleParteTransformacionByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleParteTransformacionCostoByFk = async(req, res) => {
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
    let IDINGRESOSALIDAPROCESO = req.query.IDINGRESOSALIDAPROCESO;
    if (IDINGRESOSALIDAPROCESO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAPROCESO", sql.VarChar, IDINGRESOSALIDAPROCESO)
            .query(querys.getDetalleParteTransformacionCostoByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleParteTransformacionDistribuidoByFk = async(req, res) => {
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
    let IDINGRESOSALIDAPROCESO = req.query.IDINGRESOSALIDAPROCESO;
    if (IDINGRESOSALIDAPROCESO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAPROCESO", sql.VarChar, IDINGRESOSALIDAPROCESO)
            .query(querys.getDetalleParteTransformacionDistribuidoByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getDetalleParteTransformacionReferenciaByFk = async(req, res) => {
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
    let IDINGRESOSALIDAPROCESO = req.query.IDINGRESOSALIDAPROCESO;
    if (IDINGRESOSALIDAPROCESO == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IDINGRESOSALIDAPROCESO", sql.VarChar, IDINGRESOSALIDAPROCESO)
            .query(querys.getDetalleParteTransformacionReferenciaByFk);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
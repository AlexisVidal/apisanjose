import { config } from 'dotenv'
config();
var jwt = require('jsonwebtoken')
export const getAuth = async(req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    //res.send(username)
    //res.send(process.env.usuario)
    if (username == null && password == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        if (!(username === process.env.usuario && password === process.env.password)) {
            res.status(401).send({
                error: 'usuario o contraseña inválidos'
            })
            return
        }

        var tokenData = {
            username: username
                // ANY DATA
        }

        var token = jwt.sign(tokenData, process.env.secret, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        })

        res.send({
            token
        })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
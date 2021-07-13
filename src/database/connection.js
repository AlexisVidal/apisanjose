import sql from 'mssql'
import config from "../config";

export const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        port: 1433,
        connectionTimeout: 3000000,
        requestTimeout: 3000000
    },
};

export const getConnection = async() => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
};

export { sql };
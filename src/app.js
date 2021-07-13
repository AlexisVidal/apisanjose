import express from "express";
import cors from "cors";
import recepcionRoutes from './routes/recepcion.routes'
import salidaRoutes from './routes/salida.routes'
import volcadoRoutes from './routes/volcado.router'
import paletaRoutes from './routes/paleta.router'
import ingresoTunelRoutes from './routes/ingresotunel.router'
import morgan from "morgan";

import config from "./config";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/ingresos", recepcionRoutes)
app.use("/api/salidas", salidaRoutes)
app.use("/api/volcados", volcadoRoutes)
app.use("/api/paletas", paletaRoutes)
app.use("/api/ingresostunel", ingresoTunelRoutes)
export default app;
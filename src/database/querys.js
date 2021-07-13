  export const querys = {
      getIngresos: "SELECT * FROM ingresosalidaalm WHERE idmotivo = 'IAC'",
      getIngresoByPeriodo: "SELECT * FROM ingresosalidaalm WHERE idmotivo = 'IAC' AND PERIODO = @PERIODO",
      getDetalleIngresos: "SELECT * FROM DINGRESOSALIDAALM ",
      getDetalleIngresoByFk: "SELECT * FROM DINGRESOSALIDAALM  WHERE IDINGRESOSALIDAALM = @IDINGRESOSALIDAALM",

      getSalidas: "SELECT * FROM ingresosalidaalm where idmotivo = 'STP'",
      getSalidasByPeriodo: "SELECT * FROM ingresosalidaalm where idmotivo = 'STP' AND PERIODO = @PERIODO",
      getDetalleSalidas: "SELECT * FROM DINGRESOSALIDAALM ",
      getDetalleSalidasByFk: "SELECT * FROM DINGRESOSALIDAALM  WHERE IDINGRESOSALIDAALM = @IDINGRESOSALIDAALM",

      getVolcados: "SELECT * FROM ORDENVOLCADO",
      getVolcadosByPeriodo: "SELECT * FROM ORDENVOLCADO where PERIODO = @PERIODO",
      getDetalleVolcadosLinea: "SELECT * FROM DORDENVOLCADO_LINEA ",
      getDetalleVolcadosLineaByFk: "SELECT * FROM DORDENVOLCADO_LINEA WHERE idordenvolcado = @idordenvolcado ",
      getDetalleVolcadosConsumidor: "SELECT * FROM DORDENVOLCADO_CONSUMIDOR ",
      getDetalleVolcadosConsumidorByFk: "SELECT * FROM DORDENVOLCADO_CONSUMIDOR  WHERE idordenvolcado = @idordenvolcado",

      getRegistrosPaleta: "SELECT * FROM REGISTROPALETA",
      getRegistrosPaletaByPeriodo: "SELECT * FROM REGISTROPALETA where PERIODO = @PERIODO",
      getDetalleRegistrosPaleta: "SELECT * FROM DREGISTROPALETA",
      getDetalleRegistrosPaletaByFk: "SELECT * FROM DREGISTROPALETA WHERE IDREGISTROPALETA = @IDREGISTROPALETA",

      getIngresoTunel: "SELECT * FROM INGRESOSALIDATUNEL",
      getIngresoTunelByPeriodo: "SELECT * FROM INGRESOSALIDATUNEL where PERIODO = @PERIODO",
      getDetalleIngresoTunel: "SELECT * FROM DINGRESOSALIDATUNEL",
      getDetalleIngresoTunelByFk: "SELECT * FROM DINGRESOSALIDATUNEL WHERE IDINGRESOSALIDATUNEL = @IDINGRESOSALIDATUNEL",
  };
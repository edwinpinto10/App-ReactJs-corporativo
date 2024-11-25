const accesoKey = 'acceso';

// Obtener todos los registros de acceso
export const getAccesos = () => {
  const accesos = JSON.parse(localStorage.getItem(accesoKey)) || [];
  return accesos;
};

// Registrar un acceso
export const registrarAcceso = (idEmpleado, hora, tipoAcceso) => {
  const accesos = getAccesos();
  const nuevoAcceso = {
    idEmpleado,
    hora,
    tipoAcceso, // Puede ser 'entrada' o 'salida'
    fecha: new Date().toISOString(),
  };
  accesos.push(nuevoAcceso);
  localStorage.setItem(accesoKey, JSON.stringify(accesos));
};
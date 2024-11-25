const incapacidadesKey = 'incapacidades';

// Obtener todas las incapacidades
export const getIncapacidades = () => {
  const incapacidades = JSON.parse(localStorage.getItem(incapacidadesKey)) || [];
  return incapacidades;
};

// Registrar una incapacidad
export const registrarIncapacidad = (idEmpleado, fechaInicio, fechaFin, justificacion) => {
  const incapacidades = getIncapacidades();
  const nuevaIncapacidad = {
    idEmpleado,
    fechaInicio,
    fechaFin,
    justificacion,
    fechaRegistro: new Date().toISOString(),
  };
  incapacidades.push(nuevaIncapacidad);
  localStorage.setItem(incapacidadesKey, JSON.stringify(incapacidades));
};
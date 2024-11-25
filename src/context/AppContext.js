import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);
  const [accesos, setAccesos] = useState([]);
  const [incapacidades, setIncapacidades] = useState([]);

  // Ejemplo de función para agregar un nuevo empleado
  const agregarEmpleado = (nuevoEmpleado) => {
    setEmpleados([...empleados, nuevoEmpleado]);
  };

  // Ejemplo de función para agregar un acceso
  const agregarAcceso = (nuevoAcceso) => {
    setAccesos([...accesos, nuevoAcceso]);
  };

  // Función para agregar una incapacidad
  const agregarIncapacidad = (nuevaIncapacidad) => {
    setIncapacidades([...incapacidades, nuevaIncapacidad]);
  };

  return (
    <AppContext.Provider
      value={{
        empleados,
        setEmpleados,
        agregarEmpleado,
        accesos,
        setAccesos,
        agregarAcceso,
        incapacidades,
        setIncapacidades,
        agregarIncapacidad,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
const empleadosKey = 'empleados';

// Obtener todos los empleados almacenados en LocalStorage
export const getEmpleados = () => {
  const empleados = JSON.parse(localStorage.getItem(empleadosKey)) || [];
  return empleados;
};

// Agregar un nuevo empleado
export const agregarEmpleado = (empleado) => {
  const empleados = getEmpleados();
  empleados.push(empleado);
  localStorage.setItem(empleadosKey, JSON.stringify(empleados));
};

// Eliminar un empleado por ID
export const eliminarEmpleado = (id) => {
  let empleados = getEmpleados();
  empleados = empleados.filter((empleado) => empleado.id !== id);
  localStorage.setItem(empleadosKey, JSON.stringify(empleados));
};

// Modificar un empleado
export const modificarEmpleado = (id, empleadoActualizado) => {
  let empleados = getEmpleados();
  empleados = empleados.map((empleado) =>
    empleado.id === id ? { ...empleado, ...empleadoActualizado } : empleado
  );
  localStorage.setItem(empleadosKey, JSON.stringify(empleados));
};
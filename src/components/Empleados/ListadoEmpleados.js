
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import * as XLSX from 'xlsx'; // Importamos la librería para manejar archivos Excel

const ListadoEmpleados = () => {
  const { empleados } = useContext(AppContext);

  // Función para exportar los empleados a un archivo Excel
  const handleExport = () => {
    // Creamos una hoja de trabajo
    const ws = XLSX.utils.json_to_sheet(empleados);
    
    // Creamos un libro de trabajo con la hoja
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Empleados');
    
    // Exportamos el archivo Excel
    XLSX.writeFile(wb, 'empleados.xlsx');
  };

  return (
    <div className="container mt-4">
      <h2>Listado de Empleados</h2>
      <button className="btn btn-success mb-3" onClick={handleExport}>
        Exportar a Excel
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Fecha Ingreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.id}</td>
              <td>{empleado.nombre}</td>
              <td>{empleado.email}</td>
              <td>{empleado.telefono}</td>
              <td>{empleado.direccion}</td>
              <td>{empleado.fechaIngreso}</td>
              <td>
                <button className="btn btn-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoEmpleados;
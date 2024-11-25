
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const HistorialAcceso = () => {
  const { accesos } = useContext(AppContext);

  return (
    <div className="container mt-4">
      <h2>Historial de Accesos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Empleado ID</th>
            <th>Hora de Ingreso</th>
            <th>Hora de Salida</th>
          </tr>
        </thead>
        <tbody>
          {accesos.map((acceso) => (
            <tr key={acceso.id}>
              <td>{acceso.id}</td>
              <td>{acceso.empleadoId}</td>
              <td>{acceso.horaIngreso}</td>
              <td>{acceso.horaSalida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorialAcceso;

import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ListadoIncapacidades = () => {
  const { incapacidades } = useContext(AppContext);

  return (
    <div className="container mt-4">
      <h2>Listado de Incapacidades</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Empleado</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {incapacidades.map((incapacidad) => (
            <tr key={incapacidad.id}>
              <td>{incapacidad.id}</td>
              <td>{incapacidad.nombre}</td>
              <td>{incapacidad.fechaInicio}</td>
              <td>{incapacidad.fechaFin}</td>
              <td>{incapacidad.motivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoIncapacidades;
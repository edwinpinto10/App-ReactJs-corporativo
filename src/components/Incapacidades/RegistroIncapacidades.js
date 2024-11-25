import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const RegistroIncapacidades = () => {
  const { incapacidades, setIncapacidades, empleados } = useContext(AppContext);
  const [empleadoId, setEmpleadoId] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos que el empleado exista
    const empleado = empleados.find((emp) => emp.id === parseInt(empleadoId));
    if (!empleado) {
      alert('Empleado no encontrado.');
      return;
    }

    // Agregar incapacidad al historial
    setIncapacidades([
      ...incapacidades,
      { empleadoId, nombre: empleado.nombre, fechaInicio, fechaFin, motivo, id: Date.now() },
    ]);
    setEmpleadoId('');
    setFechaInicio('');
    setFechaFin('');
    setMotivo('');
  };

  return (
    <div className="container mt-4">
      <h2>Registrar Incapacidad</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="empleadoId" className="form-label">ID Empleado</label>
          <input
            type="number"
            className="form-control"
            id="empleadoId"
            value={empleadoId}
            onChange={(e) => setEmpleadoId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
          <input
            type="date"
            className="form-control"
            id="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaFin" className="form-label">Fecha de Fin</label>
          <input
            type="date"
            className="form-control"
            id="fechaFin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="motivo" className="form-label">Motivo</label>
          <input
            type="text"
            className="form-control"
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroIncapacidades;
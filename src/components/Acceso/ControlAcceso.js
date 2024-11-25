// src/components/Acceso/ControlAcceso.js
import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ControlAcceso = () => {
  const { agregarAcceso } = useContext(AppContext);
  
  const [acceso, setAcceso] = useState({
    empleadoId: '',
    horaIngreso: '',
    horaSalida: '',
  });

  const handleChange = (e) => {
    setAcceso({
      ...acceso,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarAcceso(acceso);
    setAcceso({ empleadoId: '', horaIngreso: '', horaSalida: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Registrar Acceso</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID del Empleado</label>
          <input
            type="text"
            className="form-control"
            name="empleadoId"
            value={acceso.empleadoId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hora de Ingreso</label>
          <input
            type="time"
            className="form-control"
            name="horaIngreso"
            value={acceso.horaIngreso}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hora de Salida</label>
          <input
            type="time"
            className="form-control"
            name="horaSalida"
            value={acceso.horaSalida}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrar Acceso</button>
      </form>
    </div>
  );
};

export default ControlAcceso;

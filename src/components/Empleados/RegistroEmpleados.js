import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const RegistroEmpleados = () => {
  const { agregarEmpleado } = useContext(AppContext);
  
  const [empleado, setEmpleado] = useState({
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    fechaIngreso: '',
  });

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEmpleado(empleado); // Agrega el nuevo empleado al contexto
    setEmpleado({ id: '', nombre: '', email: '', telefono: '', direccion: '', fechaIngreso: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Registrar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={empleado.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={empleado.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={empleado.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={empleado.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            className="form-control"
            name="direccion"
            value={empleado.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha de Ingreso</label>
          <input
            type="date"
            className="form-control"
            name="fechaIngreso"
            value={empleado.fechaIngreso}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroEmpleados;
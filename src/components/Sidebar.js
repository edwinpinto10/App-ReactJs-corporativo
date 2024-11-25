import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light sidebar">
      <h4 className="mb-3">Menú de Navegación</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" to="/empleados">Empleados</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/acceso">Control de Acceso</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/estadisticas">Estadísticas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
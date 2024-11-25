import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">Sistema de Gestión</Link>
        <div>
          <Link to="/registro-empleados" className="text-white mx-2">Registro</Link>
          <Link to="/listado-empleados" className="text-white mx-2">Empleados</Link>
          <Link to="/control-acceso" className="text-white mx-2">Control Acceso</Link>
          <Link to="/estadisticas" className="text-white mx-2">Estadísticas</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
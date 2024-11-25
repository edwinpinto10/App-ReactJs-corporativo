
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistroEmpleados from './components/Empleados/RegistroEmpleados';
import ListadoEmpleados from './components/Empleados/ListadoEmpleados';
import ControlAcceso from './components/Acceso/ControlAcceso';
import HistorialAcceso from './components/Acceso/HistorialAcceso';
import RegistroIncapacidades from './components/Incapacidades/RegistroIncapacidades';
import ListadoIncapacidades from './components/Incapacidades/ListadoIncapacidades';
import DashboardEstadisticas from './components/Estadisticas/DashboardEstadisticas';
import './styles/global.css';        
import './styles/sidebar.css';       
import './styles/responsive.css';    

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/empleados/registro">Registro de Empleados</Link>
          </li>
          <li>
            <Link to="/empleados/listado">Listado de Empleados</Link>
          </li>
          <li>
            <Link to="/acceso/control">Control de Acceso</Link>
          </li>
          <li>
            <Link to="/acceso/historial">Historial de Acceso</Link>
          </li>
          <li>
            <Link to="/incapacidades/registro">Registro de Incapacidades</Link>
          </li>
          <li>
            <Link to="/incapacidades/listado">Listado de Incapacidades</Link>
          </li>
          <li>
            <Link to="/estadisticas">Estadísticas</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/empleados/registro" element={<RegistroEmpleados />} />
        <Route path="/empleados/listado" element={<ListadoEmpleados />} />
        <Route path="/acceso/control" element={<ControlAcceso />} />
        <Route path="/acceso/historial" element={<HistorialAcceso />} />
        <Route path="/incapacidades/registro" element={<RegistroIncapacidades />} />
        <Route path="/incapacidades/listado" element={<ListadoIncapacidades />} />
        <Route path="/estadisticas" element={<DashboardEstadisticas />} />
      </Routes>
    </Router>
  );
};

export default App;
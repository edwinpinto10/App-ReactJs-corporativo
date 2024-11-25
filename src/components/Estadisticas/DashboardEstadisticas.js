import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const DashboardEstadisticas = () => {
  const { empleados, accesos } = useContext(AppContext);
  
  // Estado para almacenar las estadísticas
  const [estadisticas, setEstadisticas] = useState({
    totalEmpleados: 0,
    registrosHoy: 0,
    promedioIngreso: 0
  });

  useEffect(() => {
    // Filtrar registros de hoy
    const registrosHoy = accesos.filter(r =>
      new Date(r.fecha).toDateString() === new Date().toDateString()
    );

    // Filtrar accesos que fueron antes de las 7:30 am
    const empleadosTemprano = accesos.filter(acceso => {
      const hora = parseInt(acceso.horaIngreso.split(':')[0]);
      const minutos = parseInt(acceso.horaIngreso.split(':')[1]);
      return hora < 7 || (hora === 7 && minutos <= 30);
    });

    // Calcular estadísticas
    setEstadisticas({
      totalEmpleados: empleados.length,
      registrosHoy: registrosHoy.length,
      promedioIngreso: empleadosTemprano.length / empleados.length * 100 || 0
    });
  }, [accesos, empleados]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Estadísticas</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded">
          <h3>Total Empleados</h3>
          <p>{estadisticas.totalEmpleados}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h3>Registros Hoy</h3>
          <p>{estadisticas.registrosHoy}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h3>Promedio Ingreso Temprano</h3>
          <p>{estadisticas.promedioIngreso.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardEstadisticas;

import * as XLSX from 'xlsx';

// Función para exportar los datos de los empleados a Excel
export const exportarEmpleadosAExcel = (empleados) => {
  const ws = XLSX.utils.json_to_sheet(empleados);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Empleados');
  XLSX.writeFile(wb, 'Empleados.xlsx');
};
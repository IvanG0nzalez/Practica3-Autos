"use client";
import { useState, useEffect } from "react";
import { getToken } from "@/hooks/SessionUtil";
import { obtener } from "@/hooks/Conexion";
const ListaVentas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
      const fetchVentas = async () => {
          try {

              const token = getToken();
              const response = await obtener('admin/ventas', token);

              console.log("en listaVentas",response);
              setVentas(response.datos);
          } catch (error) {
              console.error("Error obteniendo las ventas", error);
          }
      };

      fetchVentas();
  }, []);

  return (
      <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Número</th>
                        <th scope="col">Comprador</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Recargo</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta, i) => (
                        <tr key={venta.external_id}>
                            <td>{venta.numero}</td>
                            <td>{venta.comprador.nombres + ' ' + venta.comprador.apellidos ?? "CONSUMIDOR FINAL"}</td>
                            <td>{venta.empleado.nombres + ' ' + venta.empleado.apellidos}</td>
                            <td>{venta.recargo}</td>
                            <td>{venta.total}</td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
  );
};

export default ListaVentas;
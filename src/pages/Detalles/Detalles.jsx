// Detalles.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Detalles() {
  const { id } = useParams(); // Obtener el parámetro de la URL que contiene la ID de la banda
  const [banda, setBanda] = useState(null);

  useEffect(() => {
    // Lógica para obtener los datos de la banda utilizando la ID
    const fetchBanda = async () => {
      try {
        const response = await fetch("/mocks/apiBandas.json");
        const data = await response.json();
        //console.log(data);
        const bandaSolicitada = data.find((banda) => banda.id === id);
        console.log(bandaSolicitada);
        setBanda(bandaSolicitada);
      } catch (error) {
        console.error("Error fetching bandas:", error);
      }
    };

    fetchBanda();
  }, [id]); // Asegúrate de que la petición se realice cada vez que la ID cambie
  //console.log(banda);
  if (!banda) return <div>Cargando...</div>;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow bg-cover bg-center bg-fondoNegro">
        {/* Mostrar los datos de la banda */}
        {banda && (
          <div>
            <h1>{banda.name}</h1>

            {/* Otros detalles de la banda */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Detalles;

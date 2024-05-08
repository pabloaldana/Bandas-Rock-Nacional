import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Detalles() {
  const { id } = useParams();
  const [banda, setBanda] = useState(null);
  const [imagenExpandida, setImagenExpandida] = useState(null);

  useEffect(() => {
    const fetchBanda = async () => {
      try {
        const response = await fetch("/mocks/apiBandas.json");
        const data = await response.json();
        const bandaSolicitada = data.find((banda) => banda.id === id);
        setBanda(bandaSolicitada);
      } catch (error) {
        console.error("Error fetching bandas:", error);
      }
    };

    fetchBanda();
  }, [id]);

  if (!banda) return <div>Cargando...</div>;

  const expandirImagen = (imagen) => {
    setImagenExpandida(imagen);
  };

  const cerrarImagen = () => {
    setImagenExpandida(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow bg-cover bg-center bg-black ">
        {banda && (
          <div className="mt-4">
            <h1 className="capitalize underline decoration-solid text-4xl text-white">
              {banda.name}
            </h1>

            <div className="mb-5 mt-7 w-3/4 mx-auto ">
              <div className="bg-gray p-6 rounded-lg shadow-lg shadow-red-500/50 border ">
                {banda.descripcion.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-left text-white text-[20px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-5 py-5">
              {banda.integrantes && (
                <div>
                  <h2 className="text-white text-2xl">Integrantes:</h2>
                  <div className="flex flex-wrap justify-center">
                    {banda.integrantes.map((integrante, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mx-4 my-2 text-white text-2xl"
                      >
                        <img
                          src={integrante.foto}
                          alt={integrante.nombre}
                          className="w-40 h-40 object-cover rounded-full"
                        />
                        <p className=" mt-2">{integrante.nombre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-5 mt-5 pb-5">
              <h3 className="text-white">Galería</h3>
              <div className="flex flex-wrap justify-center">
                {banda.imagenes.map((imagen, index) => (
                  <img
                    key={index}
                    src={imagen}
                    alt={`Imagen ${index}`}
                    className="w-40 h-40 object-cover mx-4 my-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={() => expandirImagen(imagen)}
                  />
                ))}
              </div>
            </div>

            {imagenExpandida && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                onClick={cerrarImagen}
              >
                <img
                  src={imagenExpandida}
                  alt="Imagen expandida"
                  className="max-w-full max-h-full backdrop-blur"
                />
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Detalles;

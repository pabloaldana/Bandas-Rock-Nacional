import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

function Home() {
  const [bandas, setBandas] = useState([]);
  const [searchBanda, setSearchBanda] = useState("");

  // Filtra las bandas por el nombre buscado
  const filteredBandas = bandas.filter((banda) =>
    banda.name.toLowerCase().includes(searchBanda.toLowerCase())
  );

  useEffect(() => {
    const fetchBandas = async () => {
      try {
        const response = await fetch("/mocks/apiBandas.json");
        const data = await response.json();
        setBandas(data);
      } catch (error) {
        console.error("Error fetching bandas:", error);
      }
    };

    fetchBandas();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-cover bg-center bg-black py-5">
        <div className="flex justify-end p-2">
          <Input
            value={searchBanda}
            onChange={(e) => setSearchBanda(e.target.value)}
            type="text"
            placeholder="Buscar banda"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-6 ">
          {filteredBandas.length === 0 ? (
            <p className="text-white border-red-900 w-96 text-xl border-4">
              No se encontraron bandas.
            </p>
          ) : (
            filteredBandas.map((banda) => <Card key={banda.id} banda={banda} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Home() {
  const [bandas, setBandas] = useState([]);

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
  console.log("Datos de bandas:", bandas);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div
        className="flex-grow bg-cover bg-center"
        style={{ backgroundImage: "url(images/fondo-negro.jpg)" }}
      >
        <div className="flex flex-wrap justify-center gap-4 p-6">
          {bandas.map((banda) => (
            <Card key={banda.id} banda={banda} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

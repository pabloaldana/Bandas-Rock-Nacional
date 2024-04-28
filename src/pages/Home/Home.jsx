import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div
        className="flex-grow bg-cover bg-center"
        style={{ backgroundImage: "url(images/fondo-negro.jpg)" }}
      >
        <div className="mb-6">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

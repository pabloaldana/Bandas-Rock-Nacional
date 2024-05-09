const Footer = () => {
  return (
    <div className="bg-black text-white py-4 bottom-0 w-full border-t-2">
      <div className="grid grid-cols-3">
        <div id="quienesSomos" className="flex flex-col items-center">
          <h3>Quienes somos?</h3>
          <div className="my-auto">
            <p>Somos Álvarez, Percy y Aldana, Pablo integrantes del grupo 2 </p>
            <p>y este es nuestro proyecto:</p>
          </div>

          <div className="flex items-center">
            <img
              src="/images/gitLogo.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <h1 className="ml-2">
              <a href="https://github.com/pabloaldana/Bandas-Rock-Nacional.git">
                Rock Nacional
              </a>
            </h1>
          </div>
        </div>

        <div id="redes" className="">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-60 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
            <div className="flex gap-2 justify-center ms-8 ">
              <a
                href="https://www.facebook.com/tupaginaoficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10 h-10"
                  src="/images/Redes/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/tuinstagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10 h-10"
                  src="/images/Redes/instagram.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://twitter.com/tutwitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10 h-10"
                  src="/images/Redes/twitter.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.youtube.com/tuyoutube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10 h-10"
                  src="/images/Redes/youtube.png"
                  alt="YouTube"
                />
              </a>
            </div>
            <hr className="w-60 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ms-8" />
          </div>
          <div className="flex justify-center">
            <img
              className="w-20 h-20"
              src="/images/guitarra.png"
              alt="Guitarra"
            />
          </div>
        </div>
        <div id="Repos" className="flex flex-col items-center my-auto">
          <h1 className="text-xl">Nuestros Repositorios</h1>
          <div className="flex items-center">
            <img
              src="/images/gitLogo.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <h1 className="ml-2">
              <a href="https://github.com/praanqn?tab=repositories">
                Alvarez Percy
              </a>
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="/images/gitLogo.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <h1 className="ml-2">
              <a href="https://github.com/pabloaldana?tab=repositories">
                Aldana Pablo
              </a>
            </h1>
          </div>
        </div>
      </div>
      <p>© 2024 Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;

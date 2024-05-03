const Footer = () => {
  return (
    <div className="bg-black text-white py-4 bottom-0 w-full">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
        <div className="flex gap-6 justify-center ms-8 ">
          <a
            href="https://www.facebook.com/tupaginaoficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10"
              src={`${process.env.PUBLIC_URL}/images/Redes/facebook.png`}
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
              src={`${process.env.PUBLIC_URL}/images/Redes/instagram.png`}
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
              src={`${process.env.PUBLIC_URL}/images/Redes/twitter.png`}
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
              src={`${process.env.PUBLIC_URL}/images/Redes/youtube.png`}
              alt="YouTube"
            />
          </a>
        </div>
        <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ms-8" />
      </div>

      <div className="flex justify-center">
        <img
          className="w-20 h-20"
          src={`${process.env.PUBLIC_URL}/images/guitarra.png`}
          alt="Guitarra"
        />
      </div>

      <p>© 2024 Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;

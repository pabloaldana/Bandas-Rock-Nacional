const Footer = () => {
  return (
    <div className="bg-black text-white py-4 bottom-0 w-full">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
        <div className="flex gap-6 justify-center ms-8 ">
          <img className="w-10 h-10" src="images/Redes/facebook.png" alt="" />
          <img className="w-10 h-10" src="images/Redes/instagram.png" alt="" />
          <img className="w-10 h-10" src="images/Redes/twitter.png" alt="" />
          <img className="w-10 h-10" src="images/Redes/youtube.png" alt="" />
        </div>
        <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ms-8" />
      </div>

      <div className="flex justify-center">
        <img className="w-20 h-20" src="images/guitarra.png" alt="Guitarra" />
      </div>

      <p>© 2024 Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;

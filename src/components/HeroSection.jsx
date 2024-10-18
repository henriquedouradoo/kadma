import Img1 from '../assets/p1.jpg';
import Img2 from '../assets/p2.jpg';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Kadma simplificando
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-transparent bg-clip-text">
          {" "}
          seu ERP.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Nunca foi tão fácil automatizar seus relatórios e aprimorar as métricas de sua empresa!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-yellow-500 to-yellow-500 py-3 px-4 mx-3 rounded-md"
        >
          Começar agora!
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentação
        </a>
      </div>
      <div className="flex mt-10 justify-center">
       <img src={Img1} className="rounded-lg w-1/2 border border-yellow-700 shadow-sm shadow-yellow-400 mx-2 my-4" />
       <img src={Img2} className="rounded-lg w-1/2 border border-yellow-700 shadow-sm shadow-yellow-400 mx-2 my-4" />
      </div>
    </div>
  );
};

export default HeroSection;

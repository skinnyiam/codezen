import Blob from "../components/blob";

const HomePage = () => {
  return (
    <div className="max-w-fit mx-auto h-screen w-screen flex bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      {/* heading section  */}
      <div className="w-1/2  ">
        <Blob />
        <div className="ml-10 bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100 flex-col justify-center mt-56 p-10">
          <h1 className="text-xl mt-10  text-white text-center">Captivators brings you to club</h1>
          <h1 className="text-6xl font-Roboto  font-bold text-white text-center">
            CODEZEN
          </h1>
          <p className="text-xl font-Roboto text-left mt-8 ml-10 text-white">
            {"⮕"} Codezen helps to learn new technology and increase 
          </p>
          <p className="text-xl font-Roboto text-left mt-4 ml-10 text-white">
            {"⮕"} Codezen 
          </p>
          <p className="text-xl font-Roboto text-left mt-4 ml-10 text-white">
            {"⮕"} Wanna be part of amazing journey ??
          </p>
          <button className="font-Roboto transition ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-10 ml-10 h-10 w-32 rounded-xl text-white font-bold text-xl bg-sky-500/100">
            Join
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img className="mt-24" src="splash.webp" alt="" />
      </div>
    </div>
  );
};

export default HomePage;

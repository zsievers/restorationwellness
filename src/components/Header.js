import img from "../images/lavendar3.jpg";

export default function Header() {
  return (
    <div id="home">
      <div className="h-screen w-full bg-cover bg-center relative">
        <img
          src={img}
          alt="lavendar field"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="flex flex-col text-center px-10 py-5 mb-10">
          <h1 className="text-black text-5xl md:text-7xl lg:text-8xl font-light font-logo2 mt-10">
            Restoration Wellness
          </h1>
          <h2 className="text-black text-xl md:text-4xl lg:text-5xl font-light font-logo2 mt-5">
            Hope | Confidence | Freedom
          </h2>
        </div>
        <div className="flex flex-col px-8 py-4 mb-10 md:py-2 border-4 bg-white w-3/4 m-auto opacity-75">
          <p className="text-black text-center text-lg md:text-2xl lg:3xl font-light font-logo1">
            I believe that every person should feel FREE in their bodies:
            physically, mentally, and emotionally. It is my goal and my vision
            to partner with you and empower you to see these changes transform
            your life from the inside out.
          </p>
        </div>
      </div>
    </div>
  );
}

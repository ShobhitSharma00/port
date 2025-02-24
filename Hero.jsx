import HeroImage from "../assets/shob.jpg";

const Hero = () => {
  return (
    <div className="bg-slate-600 text-white text-center py-20">
      <img
        src={HeroImage}
        alt="Shobhit Sharma"
        className="mx-auto mb-8 h-48 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1>
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Shobhit Sharma
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 px-4">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        {/* Contact Button with Email Link */}
        <a href="mailto:shobhitshrma23@gmail.com">
          <button className="bg-gradient-to-r from-pink-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact With Me
          </button>
        </a>

        {/* Resume Button with Proper Link */}
        <a href="/Shobhit_sharma_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

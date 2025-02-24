const Navbar = () => {
    return (
      <nav className="bg-black text-white px-8 md:px-1 lg:px-24 fixed top-0 left-0 w-full z-50">
        <div className="container py-2 flex justify-between items-center">
          <div className="text-2xl font-bold hidden md:inline">shobhit sharma</div>
          <div className="space-x-6">
            <a href="#home" className= "text-green-50 " >Home</a>
            <a href="#about" className="text-green-50">About me</a>
            <a href="#services" className="text-green-50">Services</a>
            <a href="#project" className="text-green-50">Projects</a>
            <a href="#contact" className="text-green-50">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Connect me
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
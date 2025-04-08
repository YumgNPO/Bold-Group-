const Hero = () => {
  return (
    <section id="home" className="bg-diagonal min-h-[60vh] relative flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight mb-4 text-shadow">
            Premium Virtual Assistance for Your Business
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            Optimize operations, increase efficiency, and scale profitably with Bold Group's reliable virtual assistance solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="bg-[var(--bold-gold)] hover:bg-opacity-90 transition-all text-white font-bold py-3 px-8 rounded-md shadow-lg">
              Our Services
            </a>
            <a href="#contact" className="bg-white hover:bg-opacity-90 transition-all text-[var(--bold-black)] font-bold py-3 px-8 rounded-md shadow-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

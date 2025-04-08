import { whyChooseUs } from "../lib/data";

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 bg-diagonal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block text-white">WHY CHOOSE US</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div key={item.id} className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6">
              <div className="text-[var(--bold-gold)] mb-4">
                <i className={`fas ${item.iconClass} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#services" className="inline-block bg-white hover:bg-opacity-90 text-[var(--bold-black)] font-bold py-3 px-8 rounded-md shadow-lg transition-all">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

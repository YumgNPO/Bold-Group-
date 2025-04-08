import { services } from "../lib/data";
import ServiceCard from "./ServiceCard";

const ServicesOverview = () => {
  return (
    <section id="services" className="py-16 bg-[var(--bold-light)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block gold-underline">OUR SERVICES & PRICING</h2>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            We offer a range of high-value virtual assistance services tailored to business needs across various industries. Select any service to view details and access our payment portal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

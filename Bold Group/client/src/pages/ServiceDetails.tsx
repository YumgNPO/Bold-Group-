import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { getServiceById } from "../lib/data";
import PaymentModal from "../components/PaymentModal";
import { Service } from "../lib/types";

const ServiceDetails = () => {
  const [_, params] = useRoute("/services/:serviceId");
  const [service, setService] = useState<Service | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState("basic");

  useEffect(() => {
    if (params && params.serviceId) {
      const serviceData = getServiceById(params.serviceId);
      if (serviceData) {
        setService(serviceData);
      }
    }
  }, [params]);

  if (!service) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Service Not Found</h2>
            <p className="mb-8">The service you are looking for does not exist.</p>
            <Link href="/#services" className="bg-[var(--bold-gold)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSubscribeClick = (packageId = "basic") => {
    setSelectedPackageId(packageId);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block gold-underline">{service.title}</h2>
            <p className="text-lg mt-6 max-w-3xl mx-auto">
              {service.longDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Service Details</h3>
              
              {service.serviceDetails ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {service.serviceDetails.map((detail, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-semibold mb-4">{detail.title}</h4>
                      <ul className="space-y-2">
                        {detail.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-check text-[var(--bold-gold)] mr-2 mt-1"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check text-[var(--bold-gold)] mr-2 mt-1"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {service.industryApplications && (
                <div className="bg-[var(--bold-light)] p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-semibold mb-4">Industry Applications</h4>
                  <p className="mb-4">Our {service.title.toLowerCase()} is ideal for:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {service.industryApplications.map((app, index) => (
                      <div key={index} className="flex items-center">
                        <i className={`fas ${app.icon} text-[var(--bold-gold)] mr-3`}></i>
                        <span>{app.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-[var(--bold-light)] p-6 rounded-lg">
                <h3 className="text-2xl font-montserrat font-bold mb-6">Pricing Options</h3>
                
                <div className="space-y-4 mb-8">
                  {service.packages.map((pkg, index) => (
                    <div 
                      key={pkg.id} 
                      className={`border-l-4 ${
                        index === 0 ? 'border-[var(--bold-gold)]' : 
                        index === 1 ? 'border-[var(--bold-orange)]' : 
                        'border-[var(--bold-black)]'
                      } bg-white p-4 shadow-md`}
                    >
                      <h4 className="font-bold text-lg">{pkg.name}: ₦{pkg.price.toLocaleString()}/month</h4>
                      <p className="text-gray-600">{pkg.description}</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-check text-[var(--bold-gold)] mr-2 mt-1"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => handleSubscribeClick(pkg.id)}
                        className="mt-4 w-full bg-[var(--bold-gold)] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition-colors text-sm"
                      >
                        Select {pkg.name} Package
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/#services" className="inline-block bg-[var(--bold-black)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        serviceId={service.id}
        serviceName={service.title}
        packages={service.packages}
        selectedPackageId={selectedPackageId}
      />
    </>
  );
};

export default ServiceDetails;

import { Link } from "wouter";
import { Service } from "../lib/types";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="bg-[var(--bold-black)] text-white p-4">
        <h3 className="text-xl font-montserrat font-bold">{service.title}</h3>
      </div>
      <div className="p-6">
        <ul className="mb-6 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-dot-circle text-[var(--bold-gold)] text-sm mt-1.5 mr-3"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 pt-4">
          <p className="font-medium mb-2">Starting at:</p>
          <p className="text-[var(--bold-gold)] text-xl font-bold font-montserrat">
            ₦{service.packages[0].price.toLocaleString()}/month
          </p>
          <p className="text-sm text-gray-600">({service.packages[0].description})</p>
        </div>
        <div className="mt-6">
          <Link href={`/services/${service.id}`} className="inline-block bg-[var(--bold-gold)] hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-md transition-colors w-full text-center">
            View Details & Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

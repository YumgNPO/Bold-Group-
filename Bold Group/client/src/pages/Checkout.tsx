import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { getServiceById, getPackageById } from "../lib/data";
import { Service, ServicePackage } from "../lib/types";

const Checkout = () => {
  const [_, params] = useRoute("/checkout/:serviceId/:packageId");
  const { toast } = useToast();
  
  const [service, setService] = useState<Service | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    cardNumber: "",
    expDate: "",
    cvv: ""
  });

  useEffect(() => {
    if (params && params.serviceId && params.packageId) {
      const serviceData = getServiceById(params.serviceId);
      if (serviceData) {
        setService(serviceData);
        
        const packageData = getPackageById(params.serviceId, params.packageId);
        if (packageData) {
          setSelectedPackage(packageData);
        }
      }
    }
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !selectedPackage) return;
    
    setLoading(true);
    
    try {
      // In a real implementation, this would use a secure payment gateway
      await apiRequest("POST", "/api/create-payment", {
        ...formData,
        amount: selectedPackage.price,
        serviceId: service.id,
        packageId: selectedPackage.id
      });
      
      toast({
        title: "Payment Successful!",
        description: `Thank you for subscribing to ${service.title} - ${selectedPackage.name} Package`,
      });
      
      // Redirect to home page after successful payment
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!service || !selectedPackage) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Package Not Found</h2>
            <p className="mb-8">The service or package you are looking for does not exist.</p>
            <Link href="/#services" className="bg-[var(--bold-gold)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const vatAmount = selectedPackage.price * 0.075;
  const totalAmount = selectedPackage.price + vatAmount;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block gold-underline">Checkout</h2>
            <p className="text-lg mt-6">
              Complete your subscription to {service.title} - {selectedPackage.name} Package
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-montserrat font-bold mb-4">Payment Information</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Personal Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">Full Name</label>
                        <input 
                          type="text" 
                          id="fullName" 
                          name="fullName" 
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Company Name (Optional)</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Payment Details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cardNumber">Card Number</label>
                        <input 
                          type="text" 
                          id="cardNumber" 
                          name="cardNumber" 
                          placeholder="1234 5678 9012 3456" 
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expDate">Expiration Date</label>
                          <input 
                            type="text" 
                            id="expDate" 
                            name="expDate" 
                            placeholder="MM/YY" 
                            value={formData.expDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                            required 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cvv">CVV</label>
                          <input 
                            type="text" 
                            id="cvv" 
                            name="cvv" 
                            placeholder="123" 
                            value={formData.cvv}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-[var(--bold-gold)] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-colors w-full flex justify-center items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Payment...
                      </>
                    ) : "Complete Payment"}
                  </button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    By completing this payment, you agree to our <Link href="#" className="text-[var(--bold-gold)]">Terms of Service</Link> and <Link href="#" className="text-[var(--bold-gold)]">Privacy Policy</Link>.
                  </p>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-[var(--bold-light)] p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-montserrat font-bold mb-4">Order Summary</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold">{service.title}</h4>
                  <p className="text-gray-600">{selectedPackage.name} Package</p>
                  <p className="text-gray-600 text-sm">{selectedPackage.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span className="font-semibold">₦{selectedPackage.price.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>VAT (7.5%):</span>
                    <span className="font-semibold">₦{vatAmount.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-[var(--bold-gold)]">₦{totalAmount.toLocaleString()}.00</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <Link href={`/services/${service.id}`} className="text-[var(--bold-gold)] hover:underline text-sm">
                    &larr; Back to service details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

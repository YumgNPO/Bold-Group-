import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ServicePackage } from "@/lib/types";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  serviceName: string;
  packages: ServicePackage[];
  selectedPackageId?: string;
}

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  serviceId, 
  serviceName, 
  packages, 
  selectedPackageId = "basic" 
}: PaymentModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    packageId: selectedPackageId
  });
  const [loading, setLoading] = useState(false);
  
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, packageId: selectedPackageId }));
    }
  }, [isOpen, selectedPackageId]);

  useEffect(() => {
    const pkg = packages.find(p => p.id === formData.packageId);
    setSelectedPackage(pkg || null);
  }, [formData.packageId, packages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage) return;
    
    setLoading(true);
    
    try {
      // In a real implementation, this would use a secure payment gateway
      await apiRequest("POST", "/api/create-payment", {
        ...formData,
        amount: selectedPackage.price,
        serviceId
      });
      
      toast({
        title: "Payment Successful!",
        description: `Thank you for subscribing to ${serviceName} - ${selectedPackage.name} Package`,
      });
      
      onClose();
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

  if (!isOpen) return null;

  const vatAmount = selectedPackage ? selectedPackage.price * 0.075 : 0;
  const totalAmount = selectedPackage ? selectedPackage.price + vatAmount : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-montserrat font-bold">Payment Information</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Select Package</h4>
              <div className="flex flex-col space-y-2">
                {packages.map((pkg) => (
                  <label key={pkg.id} className="flex items-center space-x-3 p-3 border rounded hover:bg-[var(--bold-light)] cursor-pointer">
                    <input 
                      type="radio" 
                      name="packageId" 
                      value={pkg.id} 
                      checked={formData.packageId === pkg.id}
                      onChange={handleChange}
                      className="text-[var(--bold-gold)]" 
                    />
                    <div>
                      <span className="font-medium">{pkg.name}</span>
                      <span className="text-[var(--bold-gold)] ml-2">₦{pkg.price.toLocaleString()}/month</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Personal Information</h4>
              <div className="grid grid-cols-1 gap-4">
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
            
            <div className="space-y-4">
              <h4 className="font-semibold">Payment Details</h4>
              <div className="grid grid-cols-1 gap-4">
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
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span className="font-semibold">
                  ₦{selectedPackage ? selectedPackage.price.toLocaleString() : 0}.00
                </span>
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
                  Processing...
                </>
              ) : "Complete Payment"}
            </button>
            
            <p className="text-sm text-gray-600 text-center">
              By completing this payment, you agree to our <Link href="#" className="text-[var(--bold-gold)]">Terms of Service</Link> and <Link href="#" className="text-[var(--bold-gold)]">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

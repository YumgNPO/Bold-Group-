import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Bold Group. We'll get back to you shortly.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block gold-underline">CONTACT US</h2>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            Have questions? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
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
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bold-gold)]" 
                  required
                ></textarea>
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
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-[var(--bold-light)] p-8 rounded-lg mb-8 h-full">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--bold-gold)] rounded-full p-3 mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:mail.boldgroup@gmail.com" className="text-[var(--bold-gold)] hover:underline">
                      mail.boldgroup@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--bold-gold)] rounded-full p-3 mr-4">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+2349033440966" className="text-[var(--bold-gold)] hover:underline">
                      +234 903 344 0966
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--bold-gold)] rounded-full p-3 mr-4">
                    <i className="fas fa-hashtag text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Social Media</h4>
                    <a href="#" className="text-[var(--bold-gold)] hover:underline">
                      @BoldGroupHQ
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[var(--bold-gold)] hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-[var(--bold-gold)] hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-[var(--bold-gold)] hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-[var(--bold-gold)] hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

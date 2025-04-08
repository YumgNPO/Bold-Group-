import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[var(--bold-black)] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-white font-montserrat font-bold text-2xl">
                <span className="text-white">BOLD</span> 
                <span className="text-[var(--bold-gold)]">GROUP</span>
              </span>
            </div>
            <p className="mb-4 text-gray-300">
              A premium virtual assistance agency specializing in providing top-tier administrative, 
              marketing, customer service, tech, and business support solutions.
            </p>
            <p className="text-gray-300">
              <span className="text-[var(--bold-gold)]">Beyond imagination</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/executive-virtual-assistance" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  Executive Virtual Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-management" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/customer-support" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  Customer Support & Sales
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-lead-generation" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  Marketing & Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/finance-bookkeeping" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  Finance & Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-assistance" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  E-commerce Assistance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope text-[var(--bold-gold)] mt-1 mr-3"></i>
                <a href="mailto:mail.boldgroup@gmail.com" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  mail.boldgroup@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-[var(--bold-gold)] mt-1 mr-3"></i>
                <a href="tel:+2349033440966" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  +234 903 344 0966
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-hashtag text-[var(--bold-gold)] mt-1 mr-3"></i>
                <a href="#" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                  @BoldGroupHQ
                </a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--bold-gold)] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bold Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

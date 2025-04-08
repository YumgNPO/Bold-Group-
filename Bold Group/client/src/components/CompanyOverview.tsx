const CompanyOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block gold-underline">COMPANY OVERVIEW</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              <span className="font-bold">Bold Group</span> is a premium virtual assistance agency specializing in providing top-tier administrative, marketing, customer service, tech, and business support solutions. Our goal is to help businesses optimize their operations, increase efficiency, and scale profitably with reliable virtual assistants.
            </p>
            <p className="text-lg mb-6">
              We have a team of thirty (30) experienced and professional virtual assistants, as well as professional full-stack developers dedicated to delivering high-quality services.
            </p>
            <p className="text-lg">
              Our thirty (30) Virtual Assistants are grouped into five teams, and each team collaborates on projects to ensure seamless execution. Every project is thoroughly reviewed by Team Leaders and further assessed by the Project Manager to guarantee high-quality services.
            </p>
          </div>
          <div className="bg-diagonal rounded-lg shadow-xl p-8 text-white">
            <h3 className="text-2xl font-montserrat font-bold mb-6">Why Choose Bold Group?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle mt-1 mr-3 text-[var(--bold-gold)]"></i>
                <span>Highly experienced team of 30+ professionals</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle mt-1 mr-3 text-[var(--bold-gold)]"></i>
                <span>Structured team approach with quality assurance</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle mt-1 mr-3 text-[var(--bold-gold)]"></i>
                <span>Fast turnaround: Tasks completed within minutes to hours</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle mt-1 mr-3 text-[var(--bold-gold)]"></i>
                <span>Comprehensive services from admin to full-stack development</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle mt-1 mr-3 text-[var(--bold-gold)]"></i>
                <span>Flexible packages to suit your specific business needs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

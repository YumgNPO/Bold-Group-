import { teamMembers } from "../lib/data";
import { Link } from "wouter";

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-[var(--bold-light)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block gold-underline">OUR LEADERSHIP TEAM</h2>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            Meet our dedicated team of professionals committed to providing exceptional virtual assistance services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <div className="w-20 h-20 rounded-full bg-[var(--bold-gold)] mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-user text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-1">{member.name}</h3>
                <p className="text-[var(--bold-gold)] font-medium mb-1">{member.role}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3 justify-center">
                  {member.socialLinks.email && (
                    <a href={`mailto:${member.socialLinks.email}`} className="text-[var(--bold-gray)] hover:text-[var(--bold-gold)] transition-colors">
                      <i className="far fa-envelope"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/team" className="inline-block bg-[var(--bold-gold)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all">
            View All Team Members
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

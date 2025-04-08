import { Link } from "wouter";
import { allTeamMembers } from "../lib/data";

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-2 inline-block gold-underline">MEET OUR TEAM</h2>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            Bold Group is powered by a diverse team of professionals with expertise across various domains. 
            Get to know the people behind our exceptional services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="mb-10">
            <h3 className="text-2xl font-montserrat font-bold mb-6 border-b-2 border-[var(--bold-gold)] pb-2">Leadership Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allTeamMembers.slice(0, 3).map((member) => (
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
          </div>
          
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6 border-b-2 border-[var(--bold-gold)] pb-2">Business Development & HR Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allTeamMembers.slice(3).map((member) => (
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
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/" className="inline-block bg-[var(--bold-black)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
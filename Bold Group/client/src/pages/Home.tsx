import Hero from "../components/Hero";
import CompanyOverview from "../components/CompanyOverview";
import ServicesOverview from "../components/ServicesOverview";
import TeamSection from "../components/TeamSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ServicesOverview />
      <WhyChooseUs />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default Home;

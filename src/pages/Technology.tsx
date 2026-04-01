import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";

const TechnologyPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-20 md:pt-24">
      <TechnologySection />
    </div>
    <CTASection />
    <Footer />
  </div>
);

export default TechnologyPage;

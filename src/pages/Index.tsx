import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MovingImageCarousel from "@/components/MovingImageCarousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Smile, Crown, Syringe, ScanLine, ShieldCheck, Sparkles,
  Heart, Users, Clock, Award, Phone, MapPin, ArrowRight,
} from "lucide-react";

import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const servicesPreview = [
  { icon: Smile, title: "Cosmetic Dentistry", description: "Veneers, bonding, and whitening to help you achieve a confident, radiant smile." },
  { icon: Crown, title: "CEREC Same-Day Crowns", description: "Custom porcelain crowns designed and placed in a single visit using advanced CAD/CAM technology." },
  { icon: Syringe, title: "Implants", description: "Permanent tooth replacement with titanium implants — the gold standard for missing teeth." },
  { icon: ScanLine, title: "Invisalign", description: "Straighten your teeth discreetly with clear aligners — no brackets or wires needed." },
  { icon: ShieldCheck, title: "Preventive Care", description: "Comprehensive hygiene services and regular check-ups to maintain your oral health." },
  { icon: Sparkles, title: "Laser Gum Therapy", description: "Minimally invasive laser treatment for gum disease with faster healing and less discomfort." },
];

const teamPreview = [
  {
    image: doctor1, name: "Dr. Jeff Waisglass",
    bio: "University of Toronto graduate with over 25 years of experience. Specializes in CEREC digital dentistry and is a member of the Ontario Dental Association.",
    quote: "A smile is one of our greatest assets! My greatest satisfaction comes from helping someone achieve a beautiful and healthy smile.",
  },
  {
    image: doctor2, name: "Dr. Alan Melamed",
    bio: "McGill University graduate practicing in Toronto since 1979. Passionate about utilizing the latest dental technology including digital X-rays, laser therapy, and Invisalign.",
    quote: "My goal is to offer my patients high quality affordable dentistry.",
  },
  {
    image: doctor3, name: "Dr. Jerry Biderman",
    bio: "University of Toronto graduate with 45+ years in practice. Has a particular interest in dental care for seniors and cosmetic dentistry.",
    quote: "I've been treating many of the same patients for over 40 years and I'm grateful to continue seeing them and their families.",
  },
  {
    image: doctor4, name: "Dr. Erin Priemer",
    bio: "University of Toronto 2004 graduate committed to providing the highest level of care. Trained in Invisalign and CEREC technology.",
    quote: "A beautiful and healthy smile builds confidence and can make a meaningful impact on a person's life.",
  },
];

const whyChoose = [
  { icon: Users, title: "Family-Focused", description: "Serving multiple generations of Scarborough families for over 40 years." },
  { icon: Clock, title: "Same-Day Treatments", description: "CEREC technology means crowns and restorations in a single visit." },
  { icon: Heart, title: "Gentle Care", description: "The Wand and laser therapy for the most comfortable experience possible." },
  { icon: Award, title: "Experienced Team", description: "Four dedicated dentists with decades of combined expertise." },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />

    {/* About Intro */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Welcome</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
              Scarborough Dental: Family & Cosmetic Dentistry
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Scarborough Dental, we believe the most important service we offer is helping maintain the overall oral health of you and your family. Our office is designed to meet all your dental needs in comfortable, intimate surroundings. Our friendly and professional staff help make every visit a success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-20 bg-dental-sky">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Dental Care</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We offer a wide range of services that will have you smiling with confidence in no time.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesPreview.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Your Trusted Dental Partners</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-dental-sky flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Preview - Moving Carousel */}
    <section className="py-20 bg-dental-warm">
      <MovingImageCarousel
        images={teamPreview.map(doc => ({
          src: doc.image,
          alt: doc.name,
        }))}
        title="Meet Your Dentists"
        description="Dedicated professionals committed to your dental health and comfort."
        autoplayDuration={50}
      />
    </section>

    {/* Team Details Grid */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamPreview.map((doc, i) => <TeamCard key={doc.name} {...doc} index={i} />)}
        </div>
      </div>
    </section>

    <TechnologySection />
    <CTASection />

    {/* Contact Strip */}
    <section className="py-16 bg-dental-warm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">Visit Us</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
              <span>2100 Ellesmere Road, Suite 300, Scarborough, ON M1H 3B7</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:416-439-6776" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-dental-blue-dark transition-colors">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link to="/contact" className="px-6 py-3 rounded-lg font-medium border border-border hover:bg-muted transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;

import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Modern dental clinic interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-dental-navy/90 via-dental-navy/70 to-dental-navy/30" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/10">
            Family & Cosmetic Dentistry
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            We Create{" "}
            <span className="text-primary">Beautiful Smiles</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-lg">
            Serving Scarborough families for over 40 years with compassionate, state-of-the-art dental care in a comfortable environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:416-439-6776"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-dental-blue-dark transition-colors shadow-soft"
            >
              <Phone className="w-5 h-5" />
              Book an Appointment
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm border border-primary-foreground/20"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;

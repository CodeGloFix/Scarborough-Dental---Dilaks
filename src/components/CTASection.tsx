import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Our friendly team is here to help you achieve the smile you've always wanted. Call us today to schedule your appointment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:416-439-6776"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (416) 439-6776
          </a>
          <a
            href="mailto:info@scarboroughdental.ca"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
          >
            <Calendar className="w-5 h-5" />
            Email Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

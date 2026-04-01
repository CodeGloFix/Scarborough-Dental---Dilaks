import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Camera, Radio, Scan } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "CEREC Same-Day Crowns",
    description: "Using CAD/CAM technology, we create and place custom ceramic restorations in a single visit — no temporaries, no second appointment.",
  },
  {
    icon: Zap,
    title: "Soft Tissue Laser",
    description: "Minimally invasive treatment for gum disease, pocket reduction, biopsies, and cosmetic gum reshaping with faster healing.",
  },
  {
    icon: Scan,
    title: "Digital X-Rays",
    description: "Up to 60% less radiation than traditional X-rays with immediate, high-quality diagnostic images.",
  },
  {
    icon: Camera,
    title: "Intra-Oral Photography",
    description: "High-resolution Kodak cameras capture detailed views inside your mouth, projected on a large screen for clear communication.",
  },
  {
    icon: Shield,
    title: "Advanced Sterilization",
    description: "State-of-the-art autoclave sterilization ensures all instruments are wrapped, sterilized, and opened fresh for each patient.",
  },
  {
    icon: Radio,
    title: "The Wand",
    description: "Computer-controlled anesthetic delivery for the closest thing to a painless injection in modern dentistry.",
  },
];

const TechnologySection = () => (
  <section className="py-20 bg-dental-sky">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Technology</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Cutting-Edge Dental Technology</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We invest in the latest technology to provide faster, more comfortable, and more effective treatments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-6 rounded-xl shadow-card border border-border"
          >
            <tech.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading font-semibold text-lg mb-2">{tech.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologySection;

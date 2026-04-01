import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import {
  Smile, Crown, Syringe, ScanLine, ShieldCheck, Sparkles,
  Stethoscope, CircleDot, Scissors, Shield, Eye, AlignCenter,
  Droplets, Disc, Layers, Baby, PaintBucket,
} from "lucide-react";

const familyServices = [
  { icon: PaintBucket, title: "Bonding", description: "Cosmetic enhancement for chipped or discoloured teeth using tooth-coloured resin bonded to existing teeth." },
  { icon: Layers, title: "Bridges", description: "Permanently replace missing teeth with connected crowns attached to adjacent teeth." },
  { icon: Crown, title: "Crowns", description: "Artificial coverings for damaged or decayed teeth. We specialize in all-porcelain crowns using CEREC CAD/CAM technology." },
  { icon: Droplets, title: "Desensitizing", description: "Professional-strength desensitizing agents applied directly to sensitive spots for relief beyond what toothpaste provides." },
  { icon: Disc, title: "Dentures (Full)", description: "Complete dentures to replace all teeth at once, restoring your smile and ability to eat comfortably." },
  { icon: Disc, title: "Dentures (Partial)", description: "Removable appliances to replace multiple missing teeth — an affordable solution commonly known as a plate." },
  { icon: Syringe, title: "Implant-Supported Dentures", description: "Implants placed in the jaw with snap-on buttons for dentures that fit snugly and securely." },
  { icon: Scissors, title: "Extractions", description: "When a tooth is damaged beyond repair, we provide comfortable and safe extractions." },
  { icon: CircleDot, title: "Fillings", description: "White resin fillings for a conservative, aesthetically superior alternative to traditional silver fillings." },
  { icon: Stethoscope, title: "Implants", description: "Titanium artificial roots permanently attached to the jaw — considered the best way to replace missing teeth." },
  { icon: Layers, title: "Inlays & Onlays", description: "Porcelain restorations created with CEREC technology — more durable than resin fillings." },
  { icon: Sparkles, title: "Laser Gum Therapy", description: "Laser treatment for gingivectomies, canker sores, and gum disease with less discomfort and faster healing." },
  { icon: Shield, title: "Mouth Guards", description: "Custom-made mouth guards to protect athletes' teeth during sports activities." },
  { icon: Eye, title: "Night Guard & TMJ", description: "Hard acrylic mouthguards to treat TMJ disorder, reducing jaw pain during opening and closing." },
  { icon: ScanLine, title: "Invisalign", description: "Clear aligners to straighten teeth without braces using 3D computer processing technology." },
  { icon: Baby, title: "Sealants", description: "Clear protective coating placed in children's molar grooves to reduce cavity incidence." },
  { icon: Smile, title: "Veneers", description: "Thin porcelain facings permanently placed on teeth to straighten, whiten, and enhance your smile." },
  { icon: AlignCenter, title: "Whitening", description: "Professional-strength whitening products with custom trays for a safe and effective brighter smile." },
];

const cosmeticServices = [
  { icon: PaintBucket, title: "Bonding", description: "Enhance chipped or discoloured teeth with tooth-coloured resin for a natural look." },
  { icon: Crown, title: "Crowns", description: "All-porcelain crowns using CEREC for a perfect match to your natural tooth colour." },
  { icon: Sparkles, title: "Laser Gum Therapy", description: "Cosmetic gum reshaping and re-contouring with minimal discomfort." },
  { icon: ScanLine, title: "Invisalign", description: "Discreet orthodontic treatment using clear, removable aligners." },
  { icon: Smile, title: "Veneers", description: "Transform your smile with thin porcelain facings — a highly conservative procedure with beautiful results." },
];

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-16 bg-dental-sky">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From preventive care to advanced cosmetic treatments, we offer comprehensive dental services for your entire family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Family Dentistry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Family Dentistry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {familyServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-5 rounded-xl border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-dental-sky flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetic Dentistry */}
      <section className="py-16 bg-dental-warm">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8">Cosmetic Dentistry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cosmeticServices.map((s, i) => (
              <motion.div
                key={s.title + "-cosmetic"}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-dental-sky flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">Hygiene & Preventive Care</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hygiene and preventive maintenance are essential to your oral health. We recommend dental check-ups at least every six months. Regular intervals allow your hygienist to keep an accurate record of your oral health and reduce the chances of small issues becoming large procedures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              During your cleaning, plaque and tartar are removed from below the gum line and tooth surfaces. This is essential to good oral health — tartar and plaque buildup are the main causes of bacterial growth leading to bone loss and periodontal disease. Studies show that poor oral health may contribute to heart disease, stroke, arthritis, diabetes, and other conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
    <CTASection />
    <Footer />
  </div>
);

export default ServicesPage;

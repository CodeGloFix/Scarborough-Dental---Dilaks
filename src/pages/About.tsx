import TeamCard from "@/components/TeamCard";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const team = [
  {
    image: doctor1,
    name: "Dr. Jeff Waisglass",
    bio: "Dr. Waisglass obtained his Doctor of Dental Surgery (DDS) from the University of Toronto and has been in private practice for over 25 years. He has a keen interest in dental technology with a focus on CEREC digital dentistry. He is a member of the Ontario Dental Association, Toronto Academy of Dentistry, and the Toronto Academy of Digital Dentistry. He is also a past Clinical Instructor at the University of Toronto, Faculty of Dentistry.",
    quote: "A smile is one of our greatest assets! My greatest satisfaction comes from helping someone achieve a beautiful and healthy smile with the aid of modern technology in a gentle and comfortable environment.",
  },
  {
    image: doctor2,
    name: "Dr. Alan Melamed",
    bio: "Dr. Melamed graduated from McGill University's Faculty of Dentistry in 1978 and moved to Toronto in 1979. He and his partners take great pride in utilizing the latest dental technology including digital X-rays, intra-oral photography, laser therapy, implants, Invisalign, and CEREC crowns. He is a member of the Royal College of Dental Surgeons, the Ontario Dental Association, and the Alpha Omega Dental Society.",
    quote: "My goal is to offer my patients high quality affordable dentistry.",
  },
  {
    image: doctor3,
    name: "Dr. Jerry Biderman",
    bio: "Dr. Biderman graduated from the University of Toronto with a Doctor of Dental Surgery (DDS) and was licensed by the Royal College of Dental Surgeons of Ontario in 1969. He opened his private practice in Scarborough over 45 years ago and continues to see patients today. He is a member of the Ontario Dental Association, Toronto East Dental Society, and the Alpha Omega Dental Society, with a particular interest in dental care for seniors and cosmetic dentistry.",
    quote: "I've been treating many of the same patients for over 40 years and I'm grateful to be able to continue seeing them as well as many of their children and grandchildren.",
  },
  {
    image: doctor4,
    name: "Dr. Erin Priemer",
    bio: "Dr. Priemer graduated from the University of Toronto, Faculty of Dentistry in 2004. She is committed to providing the highest level of service in a warm and professional environment. Her personalized approach provides patients with individually designed treatment plans. She is trained in Invisalign and CEREC technology, and is a member of the Royal College of Dental Surgeons, the Ontario Dental Association, the Canadian Dental Association, and the Toronto Crown and Bridge Study Club.",
    quote: "A beautiful and healthy smile builds confidence and can make a meaningful impact on a person's life. Through a personalized approach to dentistry in a caring environment, I am committed to improving my patients' oral health with every visit.",
  },
];

const AboutPage = () => (
  <>
    <div className="pt-16 md:pt-20">
      <section className="py-16 bg-dental-sky">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet our dedicated team of dentists who bring decades of experience and a passion for creating beautiful, healthy smiles.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((doc, i) => (
              <TeamCard key={doc.name} {...doc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dental-warm">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              For over four decades, Scarborough Dental has been a cornerstone of dental care in the Scarborough community. Our practice was built on the belief that every patient deserves high-quality, compassionate dental care. From our humble beginnings to our modern, technology-driven practice, our commitment to your oral health has never wavered. We're proud to serve multiple generations of families — and we look forward to welcoming yours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <CTASection />
  </>
);

export default AboutPage;

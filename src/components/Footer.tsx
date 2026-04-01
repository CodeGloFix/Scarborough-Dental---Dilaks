import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, FileText } from "lucide-react";

const Footer = () => (
  <footer className="bg-dental-navy text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">SD</span>
            </div>
            <span className="font-heading font-bold text-lg">Scarborough Dental</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Family & Cosmetic Dentistry serving Scarborough and the GTA for over 40 years. Your smile is our priority.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "Our Team" },
              { to: "/technology", label: "Technology" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Downloads</h4>
          <div className="flex flex-col gap-2">
            <a href="http://scarboroughdental.ca/assets/patient-questionnaire.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <FileText className="w-4 h-4" /> Patient Questionnaire
            </a>
            <a href="http://scarboroughdental.ca/assets/list-of-medications.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <FileText className="w-4 h-4" /> Medications List
            </a>
            <a href="http://scarboroughdental.ca/assets/post-op-extractions-instructions.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <FileText className="w-4 h-4" /> Post-Op Guide (Extractions)
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:416-439-6776" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 shrink-0" /> (416) 439-6776
            </a>
            <a href="mailto:info@scarboroughdental.ca" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 shrink-0" /> info@scarboroughdental.ca
            </a>
            <div className="flex items-start gap-2 text-sm opacity-70">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>2100 Ellesmere Road, Suite 300, Scarborough, ON M1H 3B7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-sm opacity-50">
          © {new Date().getFullYear()} Scarborough Dental. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

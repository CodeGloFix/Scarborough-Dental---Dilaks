import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-card rounded-xl p-6 border border-border shadow-card card-hover"
  >
    <div className="w-12 h-12 rounded-xl bg-dental-sky flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export default ServiceCard;

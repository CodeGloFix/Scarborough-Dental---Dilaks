import { motion } from "framer-motion";

interface TeamCardProps {
  image: string;
  name: string;
  bio: string;
  quote: string;
  index: number;
}

const TeamCard = ({ image, name, bio, quote, index }: TeamCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="bg-card rounded-xl overflow-hidden shadow-card border border-border"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">{bio}</p>
      <blockquote className="text-sm italic text-primary border-l-2 border-primary pl-4">
        "{quote}"
      </blockquote>
    </div>
  </motion.div>
);

export default TeamCard;

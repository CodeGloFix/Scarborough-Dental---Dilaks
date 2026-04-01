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
    className="bg-card rounded-lg overflow-hidden shadow-md border border-border h-full flex flex-col card-hover"
  >
    {/* Image Container with Hover Zoom */}
    <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-heading font-bold text-lg mb-2">{name}</h3>
      <p className="text-xs font-medium text-primary mb-4 uppercase tracking-wide">Dentist</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{bio}</p>
      <blockquote className="text-xs italic text-primary border-l-2 border-primary pl-3">
        "{quote}"
      </blockquote>
    </div>
  </motion.div>
);

export default TeamCard;

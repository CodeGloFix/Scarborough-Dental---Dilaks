import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import TeamCard from "./TeamCard";

interface TeamMember {
  image: string;
  name: string;
  bio: string;
  quote: string;
}

interface TeamCarouselProps {
  team: TeamMember[];
}

const TeamCarousel = ({ team }: TeamCarouselProps) => {
  // Duplicate team for seamless continuous loop
  const displayTeam = [...team, ...team];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      dragFree: true
    }, 
    [
      AutoScroll({ 
        speed: 1, 
        stopOnInteraction: false, 
        stopOnMouseEnter: true
      })
    ]
  );

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="flex -ml-6">
        {displayTeam.map((doc, i) => (
          <div key={`${doc.name}-${i}`} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-6 flex">
            <div className="w-full flex h-full">
              <TeamCard {...doc} index={i % team.length} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;

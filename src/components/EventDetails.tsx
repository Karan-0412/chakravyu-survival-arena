
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

export const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "Date & Time",
      description: "March 15, 2024 | 6:00 PM - 11:00 PM"
    },
    {
      icon: MapPin,
      title: "Venue",
      description: "College Auditorium & Sports Complex"
    },
    {
      icon: Users,
      title: "Participants",
      description: "456 Players | Teams of 4-6 Members"
    },
    {
      icon: Trophy,
      title: "Prize Pool",
      description: "₹50,000 Total Prize Money"
    }
  ];

  return (
    <section id="details" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title mb-4">The Game Begins</h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Step into a world where childhood games become deadly challenges. 
            Inspired by the global phenomenon, Chakravyu tests your wit, courage, and teamwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div 
                key={index}
                className="card-glass group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {detail.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {detail.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Event Description */}
        <div className="mt-16 card-dark animate-fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary font-display">
              Welcome to Chakravyu
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              In the ancient Sanskrit epic Mahabharata, Chakravyu was an impenetrable military formation - a deadly maze that claimed even the bravest warriors. 
              Tonight, we recreate this legendary challenge through a series of games that will test every aspect of human capability. 
              <br /><br />
              From the innocent game of Red Light, Green Light to complex puzzles that require perfect teamwork, 
              each challenge eliminates the weak and rewards the strategic. Only those who can navigate the maze of mind games, 
              physical challenges, and psychological warfare will emerge victorious.
              <br /><br />
              <span className="text-primary font-semibold">
                Are you ready to enter the Chakravyu?
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

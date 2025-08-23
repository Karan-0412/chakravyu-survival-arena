
import { Clock, CheckCircle, Circle } from "lucide-react";

export const Timeline = () => {
  const timelineEvents = [
    {
      time: "9:00 PM",
      title: "Registration & Check-in",
      description: "Team verification and briefing session",
      completed: false
    },
    {
      time: "9:30 PM",
      title: "Opening Ceremony",
      description: "Welcome address and game rules explanation",
      completed: false
    },
    {
      time: "10:00 PM",
      title: "Round-1",
      description: "Classic elimination game with a deadly twist",
      completed: false
    },
    {
      time: "11:30 PM",
      title: "Round-2",
      description: "Precision and patience under pressure",
      completed: false
    },
    {
      time: "2:00 PM",
      title: "Round-3",
      description: "Mind games and psychological warfare",
      completed: false
    },
    {
      time: "3:30 PM",
      title: "Final Round",
      description: "Ultimate test of teamwork and strategy",
      completed: false
    },
    {
      time: "4:00 PM",
      title: "Victory Ceremony",
      description: "Crown the champions and distribute prizes",
      completed: false
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title mb-4">Game Timeline</h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Every game is scheduled to perfection. Miss your slot, 
            and you're eliminated before you even begin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>

            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-red">
                    {event.completed ? (
                      <CheckCircle className="text-primary-foreground" size={20} />
                    ) : (
                      <Circle className="text-primary-foreground" size={20} />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`card-glass ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                } group hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-center mb-3">
                    <Clock className="text-primary mr-2" size={18} />
                    <span className="font-bold text-primary font-display">
                      {event.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="card-dark inline-block">
            <div className="flex items-center">
              <Clock className="text-primary mr-3" size={24} />
              <div>
                <h3 className="font-bold text-lg text-foreground">Total Duration</h3>
                <p className="text-muted-foreground">Approximately 6 hours of intense competition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

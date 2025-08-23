
import { useState, useEffect } from "react";
import { ChevronDown, Clock } from "lucide-react";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

useEffect(() => {
  const eventDate = new Date(2025, 7, 25, 0, 0, 0); // August 25, 2025, 12:00

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate.getTime() - now;

    if (distance <= 0) {
      clearInterval(timer);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--blood-red)_/_0.2)_0%,transparent_60%)]"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-primary rounded-full animate-pulse-red"></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-primary/30 rotate-45 animate-pulse"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="text-center mb-6">
  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 animate-blood-drip">
    Apex Techno Warriors
  </h3>

  {/* Event Title */}
  <h1 className="text-6xl md:text-8xl font-black font-display mb-6 animate-glitch text-hero">
    CHAKRAVYU
  </h1>
</div>

          <p className="text-subtitle mb-8 max-w-2xl mx-auto">
            Enter the deadliest games ever conceived. Survive the maze of challenges. 
            Only the worthy will claim victory.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center items-center mb-8 space-x-1">
            <Clock className="text-primary mr-3 animate-float" size={28} />
            <span className="text-lg font-medium text-muted-foreground mr-4 font-horror">Death Clock:</span>
            <div className="flex space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center animate-countdown-pulse">
                  <div className="bg-gradient-to-br from-primary to-dark-red text-primary-foreground px-4 py-3 rounded-lg font-bold text-2xl min-w-[70px] border-2 border-primary/30 shadow-lg shadow-primary/25 animate-pulse-red">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 capitalize font-horror">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
           <button 
  className="btn-primary group"
  onClick={() => window.open('https://forms.gle/97YfJnHVg8XP9cGh6', '_blank')}
>
  Confirm Your Spot
  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

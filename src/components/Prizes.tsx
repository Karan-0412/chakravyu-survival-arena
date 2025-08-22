
import { Trophy, Medal, Award, Gift } from "lucide-react";

export const Prizes = () => {
  const prizes = [
    {
      position: "1st Place",
      amount: "₹25,000",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/20",
      description: "Winner Takes All + Exclusive Trophy"
    },
    {
      position: "2nd Place", 
      amount: "₹15,000",
      icon: Medal,
      color: "text-gray-400",
      bgColor: "bg-gray-400/20",
      description: "Runner-up Prize + Certificate"
    },
    {
      position: "3rd Place",
      amount: "₹10,000", 
      icon: Award,
      color: "text-amber-600",
      bgColor: "bg-amber-600/20",
      description: "Third Position Prize + Medal"
    }
  ];

  const specialPrizes = [
    {
      title: "Best Strategy",
      prize: "₹3,000",
      description: "Most tactical gameplay"
    },
    {
      title: "Fan Favorite",
      prize: "₹2,000", 
      description: "Audience choice award"
    },
    {
      title: "Best Team Spirit",
      prize: "₹2,000",
      description: "Outstanding teamwork"
    }
  ];

  return (
    <section id="prizes" className="py-20 px-4 bg-gradient-to-b from-charcoal to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title mb-4">Victory Rewards</h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Survive the games, claim the glory. The ultimate prize awaits 
            those brave enough to conquer the Chakravyu.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <div 
                key={index}
                className="card-glass text-center group hover:scale-105 transition-all duration-300 hover:border-primary/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 ${prize.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={prize.color} size={40} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-display">
                  {prize.position}
                </h3>
                <div className="text-4xl font-black text-primary mb-3 font-display">
                  {prize.amount}
                </div>
                <p className="text-muted-foreground">
                  {prize.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Special Prizes */}
        <div className="card-dark">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-display flex items-center justify-center">
              <Gift className="text-primary mr-3" size={28} />
              Special Recognition Awards
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialPrizes.map((special, index) => (
              <div 
                key={index}
                className="text-center p-4 border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="font-bold text-lg text-foreground mb-2">
                  {special.title}
                </h4>
                <div className="text-2xl font-bold text-primary mb-2 font-display">
                  {special.prize}
                </div>
                <p className="text-muted-foreground text-sm">
                  {special.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Total Prize Pool */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-primary/20 border border-primary/50 rounded-lg px-8 py-4">
            <Trophy className="text-primary mr-4" size={32} />
            <div>
              <div className="text-sm text-primary font-semibold">TOTAL PRIZE POOL</div>
              <div className="text-3xl font-black text-primary font-display">₹50,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

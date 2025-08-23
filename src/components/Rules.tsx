
import { useState } from "react";
import { ChevronDown, AlertTriangle, Shield, Target, Zap } from "lucide-react";

export const Rules = () => {
  const [openRule, setOpenRule] = useState<number | null>(0);

  const rules = [
    {
      icon: AlertTriangle,
      title: "Elimination Rules",
      content: [
        "Players eliminated in any game cannot continue to the next round",
        "Teams losing majority members are automatically disqualified",
        "Cheating or rule violations result in immediate elimination",
        "No second chances - every decision counts"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Fair Play",
      content: [
        "All games are designed to be safe but challenging",
        "Medical team will be present throughout the event",
        "Respectful behavior towards all participants is mandatory",
        "Judges' decisions are final and non-negotiable"
      ]
    },
    {
      icon: Target,
      title: "Victory Conditions",
      content: [
        "Complete all games to reach the final challenge",
        "Final game determines the ultimate winner",
        "Ties will be broken by sudden-death challenges",
        "Winners must demonstrate both skill and strategy"
      ]
    },
  ];

  return (
    <section id="rules" className="py-20 px-4 bg-gradient-to-b from-background to-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title mb-4">Game Rules</h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Understand the rules before you enter. In Chakravyu, 
            ignorance is not bliss - it's elimination.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {rules.map((rule, index) => {
            const IconComponent = rule.icon;
            const isOpen = openRule === index;
            
            return (
              <div 
                key={index}
                className="card-dark mb-4 hover:border-primary/50 transition-all duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenRule(isOpen ? null : index)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-display">
                      {rule.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                    size={24} 
                  />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <div className="border-t border-border pt-6">
                      <ul className="space-y-3">
                        {rule.content.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
                            className="flex items-start text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-destructive/20 border border-destructive/50 rounded-lg px-6 py-3">
            <AlertTriangle className="text-destructive mr-3" size={20} />
            <span className="text-destructive font-semibold">
              Warning: Participation is at your own risk. Prepare for the unexpected.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

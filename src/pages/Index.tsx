
import { Hero } from "@/components/Hero";
import { EventDetails } from "@/components/EventDetails";
import { Rules } from "@/components/Rules";
import { Timeline } from "@/components/Timeline";
import { Prizes } from "@/components/Prizes";
import { Navigation } from "@/components/Navigation";
import { Sponsors } from "@/components/Sponsors";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Sponsors />
      <EventDetails />
      <Rules />
      <Timeline />
      <Prizes />

    </div>
  );
};

export default Index;

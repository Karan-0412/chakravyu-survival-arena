
import { Hero } from "@/components/Hero";
import { EventDetails } from "@/components/EventDetails";
import { Rules } from "@/components/Rules";
import { Timeline } from "@/components/Timeline";
import { Prizes } from "@/components/Prizes";
import { Registration } from "@/components/Registration";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <EventDetails />
      <Rules />
      <Timeline />
      <Prizes />
      <Registration />
    </div>
  );
};

export default Index;

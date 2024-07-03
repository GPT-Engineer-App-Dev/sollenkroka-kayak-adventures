import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Sollenkroka Kayak Trips</h1>
      <p className="text-lg">
        Discover the beauty of Sollenkroka and plan your next kayaking adventure with us.
      </p>
      <p className="text-md">
        Sollenkroka is a fantastic place for kayaking, offering stunning views, serene waters, and a variety of routes for all skill levels.
      </p>
      <Button variant="primary" asChild>
        <a href="/map">Explore the Map</a>
      </Button>
    </div>
  );
};

export default Index;
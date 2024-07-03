const About = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About Sollenkroka Kayak Trips</h1>
      <p>
        Sollenkroka Kayak Trips is dedicated to helping you plan the perfect kayaking adventure in Sollenkroka. Our site provides detailed maps, route suggestions, and tips to ensure you have a safe and enjoyable trip.
      </p>
      <p>
        Our team consists of experienced kayakers who are passionate about exploring the beautiful waters of Sollenkroka. We hope to inspire others to discover the joy of kayaking in this stunning location.
      </p>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <blockquote className="border-l-4 border-primary pl-4">
          "An unforgettable experience! The routes were well-planned and the views were breathtaking." - Alex
        </blockquote>
        <blockquote className="border-l-4 border-primary pl-4">
          "Sollenkroka is a kayaker's paradise. Thanks to this site, we had an amazing trip!" - Jamie
        </blockquote>
      </div>
    </div>
  );
};

export default About;
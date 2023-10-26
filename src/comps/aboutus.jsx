import { useEffect } from "react";
const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white text-gray-800 p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Banquet Halls of the Mid-South</h1>
        <p className="italic mb-8">Frances, The Banquet Hall Lady - Mastering Memorable Events</p>
      </div>

      <div className="text-lg mb-12">
        <h2 className="font-semibold mb-3">Your Premier Destination for Elegant Events in Memphis, TN</h2>
        <p>Hello! I'm <strong>Frances, The Banquet Hall Lady</strong>. Specializing in creating extraordinary experiences, I offer affordable yet elegant venues for all types of celebrations With unique packages to fit any budget, I'm here for your elegant receptions, weddings, baby showers, quinceañeras, corporate events, and more. For a memorable experience, call Frances, your Banquet Hall Lady.
When it comes to event venues in Memphis TN, Banquet Halls of the Mid-South has years of experience planning and hosting outstanding events, from wedding receptions to quinceañeras, sweet 16 birthday celebrations, and large corporate gatherings. From the moment you walk through our door, you will see why Banquet Halls of the Mid-South offers unparalleled event space for rent. Featuring an extraordinary ballroom with high ceilings and sparkling chandeliers, Banquet Halls of the Mid-South also employs only the absolute finest staff and chefs.</p>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why Choose Banquet Halls of the Mid-South?</h3>
        <ul className="list-disc list-inside">
          <li>Wedding Receptions</li>
          <li>Quinceañeras</li>
          <li>Sweet 16 Birthday Celebrations</li>
          <li>Large Corporate Gatherings</li>
        </ul>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Our Venue - A Blend of Elegance and Sophistication</h3>
        <p>As you step into our world, you'll be greeted by an Exquisite Ballroom, Professional Staff, and Top-Tier Culinary Experiences...</p>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Our Mission - Your Event, Our Commitment</h3>
        <p>At Banquet Halls of the Mid-South, we believe in making every event seamless and memorable. Our mission is to make sure that every detail of your event goes according to plan and meets your standards. Each and every one of our staff members brings a passion and dedication to the job that shines in everything we do. When you book our event venue in Memphis TN, you get more than just an event space — you get a dedicated team of event professionals at your service. structure this nicely please</p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">Book Your Event Today</h3>
        <p>For a venue that speaks volumes and a team that turns dreams into reality, Banquet Halls of the Mid-South is your ultimate choice.</p>
        <p className="italic mt-4">Contact Frances, your dedicated Banquet Hall Lady, for a consultation and start planning an unforgettable experience!</p>
      </div>

      <div className="text-center">
        <h3 className="font-semibold">Connect With Us</h3>
        <p className="mb-2">Location: Memphis, TN</p>
        <p className="mb-2">Phone: [901.690.3671]</p>
        <p>Email: [BBHMemphis@gmail.com ]</p>
      </div>

      <div className="text-center mt-8 italic">
        Banquet Halls of the Mid-South – Where Elegance and Excellence Meet.
      </div>
    </div>
  );
};

export default Aboutus;
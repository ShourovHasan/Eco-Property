import Navbar from "../../components/Nevbar/Navbar";
import RentFlatCard from "./flat-card";

const RentFlat = () => {
  const flatData = [
    {
      id: "1",
      title: "Single Family flat",
      size: `3 bed, 2 bath 1,555sqft`,
      description: `Brand new construction single family home!!! Located in a huge
      corner lot, this could be your dream home. 3 bedrooms and 2 full
      bathrooms. Move in ready with brand new appliances included. 2 car
      garage, garage door opener with remote. Ring doorbell.`,

      price: "$2,100/month",
      location: "767 Staffora St, Haines City, FL 33844",
      image: "/images/flat-1.jpeg",
    },
    {
      id: "2",
      title: "Flat For Single Family",
      size: "3 bed ,3 bath, 1,381sqft",
      description: ` Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away
            from Lackland AFB! This home features an open floor plan with all
            bedrooms & laundry room upstairs! Available for immediate move in,
            contact us today to schedule your showing!`,
      price: "$1,750/month",
      location: "7516 Bowdre, San Antonio, TX 78252",
      image: "/images/flat-2.jpeg",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero min-h-screen mb-5"
        style={{ backgroundImage: `url("/images/flat.png")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <p className="mb-5 text-2xl font-bold">
              Discover your perfect flat, Search nearby flat for rent
            </p>
            <button className="btn btn-success">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-4 gap-4">
          {flatData.map((flat) => (
            <RentFlatCard flat={flat}></RentFlatCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentFlat;

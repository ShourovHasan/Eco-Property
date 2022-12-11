import { useState } from "react";
import Navbar from "../../../components/Nevbar/Navbar";
import RentHouseCard from "./house-card";
import HouseModal from "./house-modal";

const RentHouse = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentHouse, setCurrentHouse] = useState(null);
  const houseData = [
    {
      id: "1",
      title: "House For Single Family",
      size: `3 bed, 1 bath, 1,165sqft`,
      description: `This 3 bedroom home has over 1100 sq.boasts beautiful bronze/black accents, new carpet, fresh paint, open and spacious living areas, eat in kitchen, and spacious detached 2 car garage. Move right in to this warm and inviting home. Kitchen has all stainless steel appliances, deep farmer sink, and plenty of cabinet and counter top space.`,

      price: "$1,300/month",
      location: "690 Eva Ave, Akron, OH 44306",
      image: "/images/house-1.png",
    },
    {
      id: "2",
      title: "Duplex House For Rent",
      size: "2 bed, 1  bath, 2,146sqft",
      description: `Warm 2 bedroom 1st-floor apartment in a duplex located in a lovely community. Unique offerings- full basement for storage use and laundry room; property parking space in the back of the house; front and back porch; front and back access. The home has a huge living room/family roof off of a galley-type kitchen.
      `,
      price: "$1,350/month",
      location: "122 Summit Ave, Phillipsburg, NJ 08865",
      image: "/images/house-2.png",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero min-h-screen mb-5"
        style={{ backgroundImage: `url("/images/house.jpeg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <p className="mb-5 text-2xl font-bold">
              Discover your perfect House, Search nearby House for rent
            </p>
            <button className="btn btn-success">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-4 gap-4">
          {houseData.map((house) => (
            <RentHouseCard
              setShowModal={setShowModal}
              setCurrentHouse={setCurrentHouse}
              house={house}
            ></RentHouseCard>
          ))}
        </div>
        {showModal ? (
          <HouseModal
            setShowModal={setShowModal}
            house={currentHouse}
          ></HouseModal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RentHouse;

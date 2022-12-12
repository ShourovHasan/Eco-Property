import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import RentFlatCard from "./flat-card";
import FlatModal from "./flat-modal";
import Footer from "../../../components/Footer/Footer";

const RentFlat = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentFlat, setCurrentFlat] = useState(null);
  const flatData = [
    {
      id: "1",
      title: "Single Family flat",
      size: `2 bed, 2 bath 1,555sqft`,
      description: `Brand new construction single family home!!! Located in a huge
      corner lot, this could be your dream home. 3 bedrooms and 2 full
      bathrooms. Move in ready with brand new appliances included. 2 car
      garage, garage door opener with remote. Ring doorbell.`,

      price: "$2,100/month",
      location: "Dhaka,Mirpur",
      image: "/images/flat-1.jpeg",
    },
    {
      id: "2",
      title: "Flat For Single Family",
      size: "2 bed ,2 bath, 1,281sqft",
      description: ` Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away
            from Lackland AFB! This home features an open floor plan with all
            bedrooms & laundry room upstairs!`,
      price: "$1,450/month",
      location: "Dhaka, Dhanmondi",
      image: "/images/flat-2.jpeg",
    },
    {
      id: "3",
      title: "Single Family Luxary Flat",
      size: "3 bed ,3 bath, 2,000sqft",
      description: ` Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away
            from Lackland AFB! This home features an open floor plan with all
            bedrooms & laundry room upstairs!`,
      price: "$2050/month",
      location: "Chittagong",
      image: "/images/flat-3.jpeg",
    },
    {
      id: "4",
      title: "Flat For Single Family",
      size: "2 bed ,2 bath, 1,500sqft",
      description: ` Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away
            from Lackland AFB! This home features an open floor plan with all
            bedrooms & laundry room upstairs!`,
      price: "$1,650/month",
      location: "Khulna",
      image: "/images/flat-4.png",
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
            <button className="btn btn-warning">Explore</button>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-4 gap-4">
          {flatData.map((flat) => (
            <RentFlatCard
              setShowModal={setShowModal}
              setCurrentFlat={setCurrentFlat}
              flat={flat}
            ></RentFlatCard>
          ))}
        </div>
        {showModal ? (
          <FlatModal setShowModal={setShowModal} flat={currentFlat}></FlatModal>
        ) : (
          ""
        )}
      </div>
      <Footer></Footer>

    </div>
  );
};

export default RentFlat;

import Navbar from "../../components/Nevbar/Navbar";

const RentFlat = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("/images/flat.png")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <p className="mb-5 text-2xl font-bold">
              Discover your perfect flat, Search nearby flat for rent
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentFlat;

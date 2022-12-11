import Navbar from "../../components/Nevbar/Navbar";

const RentFlat = () => {
  const flats = (
    <div class="grid grid-cols-4 gap-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="max-h-[230px]" src="/images/flat-1.jpeg" alt="flat" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Single Family Flat
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold">$2,100/month</p>
          <p>3 bed, 2 bath 1,555sqft</p>
          <p className="font-bold">
            Location: 767 Staffora St, Haines City, FL 33844
          </p>
          <p>
            Brand new construction single family home!!! Located in a huge
            corner lot, this could be your dream home. 3 bedrooms and 2 full
            bathrooms. Move in ready with brand new appliances included. 2 car
            garage, garage door opener with remote. Ring doorbell.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Details</button>
            <button className="btn btn-success">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="max-h-[230px]" src="/images/flat-2.jpeg" alt="flat" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Flat For Single Family
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold">$1,750/month</p>
          <p>3 bed ,3 bath, 1,381sqft</p>
          <p className="font-bold">
            Location: 7516 Bowdre, San Antonio, TX 78252
          </p>
          <p>
            Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away
            from Lackland AFB! This home features an open floor plan with all
            bedrooms & laundry room upstairs! Available for immediate move in,
            contact us today to schedule your showing!
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Details</button>
            <button className="btn btn-success">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="max-h-[230px]" src="/images/flat-1.jpeg" alt="flat" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Single Family Flat
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold">$2,100/month</p>
          <p>3 bed, 2 bath 1,555sqft</p>
          <p className="font-bold">
            Location: 767 Staffora St, Haines City, FL 33844
          </p>
          <p>
            Brand new construction single family home!!! Located in a huge
            corner lot, this could be your dream home. 3 bedrooms and 2 full
            bathrooms. Move in ready with brand new appliances included. 2 car
            garage, garage door opener with remote. Ring doorbell.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Details</button>
            <button className="btn btn-success">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="max-h-[230px]" src="/images/flat-2.jpeg" alt="flat" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Flat For Single Family
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold">$1,750/month</p>
          <p>3 bed ,3 bath, 1,381sqft</p>
          <p className="font-bold">
            Location: 7516 Bowdre, San Antonio, TX 78252
          </p>
          <p>
            Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away
            from Lackland AFB! This home features an open floor plan with all
            bedrooms & laundry room upstairs! Available for immediate move in,
            contact us today to schedule your showing!
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Details</button>
            <button className="btn btn-success">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );

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
      <div>{flats}</div>
    </div>
  );
};

export default RentFlat;

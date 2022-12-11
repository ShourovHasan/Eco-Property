const RentHouseCard = ({ house, setShowModal, setCurrentHouse }) => {
  return (
    <div>
      {/* -----------housecard start----------- */}

      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="max-h-[230px]" src={house.image} alt="house" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {house.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold">{house.price}</p>
          <p>{house.size}</p>
          <p className="font-bold">Location: {house.location}</p>
          <p>{house.description}</p>
          <div className="card-actions justify-end">
            <label
              className="btn btn-info"
              onClick={() => {
                setShowModal(true);
                setCurrentHouse(house);
              }}
              htmlFor="my-modal-3"
            >
              Details
            </label>

            <button className="btn btn-success">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentHouseCard;

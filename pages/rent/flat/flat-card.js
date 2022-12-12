const RentFlatCard = ({ flat, setShowModal, setCurrentFlat }) => {
  return (
    <div>
      {/* -----------flat card start----------- */}

      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="max-h-[230px]" src={flat.image} alt="flat" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {flat.title}
            <div className="badge badge-warning">NEW</div>
          </h2>
          <p className="font-bold">{flat.price}</p>
          <p>{flat.size}</p>
          <p className="font-bold">Location: {flat.location}</p>
          <p>{flat.description}</p>
          <div className="card-actions justify-center">
            <label
              className="btn btn-info"
              onClick={() => {
                setShowModal(true);
                setCurrentFlat(flat);
              }}
              htmlFor="my-modal-3"
            >
              Details
            </label>

            <button className="btn btn-warning">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentFlatCard;

const FlatModal = ({ flat, setShowModal }) => {
  return (
    <div>
      {/* -----------modal----------- */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              setShowModal(false);
            }}
          >
            ✕
          </label>
          <div className="">
            <figure>
              <img className="image-full" src={flat.image} alt="flat" />
            </figure>
            <div className="">
              <h2 className="text-2xl  mr-4 mb-2">
                {flat.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="font-bold">Price: {flat.price}</p>
              <p className="mb-4">Size: {flat.size}</p>
              <p className="font-bold mb-2">Location: {flat.location}</p>
              <p>{flat.description}</p>
              <div className="justify-end">
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------modal-end----------- */}
    </div>
  );
};

export default FlatModal;

import Navbar from "../../components/Nevbar/Navbar";

const RentFlatCard = ({ flat }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-[230px]" src={flat.image} alt="flat" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {flat.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold">{flat.price}</p>
        <p>{flat.size}</p>
        <p className="font-bold">Location: {flat.location}</p>
        <p>{flat.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info">Details</button>
          <button className="btn btn-success">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default RentFlatCard;



const SellCard = ({flat}) => {
    const {title, size, about, image, location, price} = flat;
    return (
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={image}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            {title}
          </h5>
          <p className="text-gray-700">
           Price: <span className="text-red-500">{price}</span>
          </p>
          <p className="text-gray-700">
          <span className="text-yellow-500">{location}</span>
          </p>
          <p className="text-gray-700">
           {about?.length > 110 ? about.slice(0, 110) + '...' : about}
          </p>
          <label htmlFor="my-modal-3" className=" text-white btn btn-primary">Details</label>
          
        </div>
    );
};

export default SellCard;
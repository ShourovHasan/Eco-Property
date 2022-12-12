import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Advertise = () => {

    const advertisedItems = [
        {
            _id: "1",
            title: "Single Family flat",
            size: `3 bed, 2 bath 1,555sqft`,
            description: `Brand new construction single family home!!! Located in a huge corner lot, this could be your dream home. 3 bedrooms and 2 full bathrooms. Move in ready with brand new appliances included. 2 car garage, garage door opener with remote. Ring doorbell.`,
            price: "$2,100/month",
            location: "767 Staffora St, Haines City, FL 33844",
            image: "/images/flat-1.jpeg",
        },
        {
            _id: "2",
            title: "Flat For Single Family",
            size: "3 bed ,3 bath, 1,381sqft",
            description: ` Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away from Lackland AFB! This home features an open floor plan with all bedrooms & laundry room upstairs! Available for immediate move in,
            contact us today to schedule your showing!`,
            price: "$1,750/month",
            location: "7516 Bowdre, San Antonio, TX 78252",
            image: "/images/flat-2.jpeg",
        },
        {
            _id: "3",
            title: "Family flat",
            size: `3 bed, 2 bath 1,555sqft`,
            description: `Brand new construction single family home!!! Located in a huge corner lot, this could be your dream home. 3 bedrooms and 2 full bathrooms. Move in ready with brand new appliances included. 2 car garage, garage door opener with remote. Ring doorbell.`,
            price: "$2,100/month",
            location: "767 Staffora St, Haines City, FL 33844",
            image: "/images/flat-3.jpeg",
        },
        {
            _id: "4",
            title: "Flat For Multiple Family",
            size: "3 bed ,3 bath, 1,381sqft",
            description: ` Come look at this beautiful two-story home nestled in a cul- de-sac,
            conveniently located between highway 90 & 410, only minutes away from Lackland AFB! This home features an open floor plan with all bedrooms & laundry room upstairs! Available for immediate move in,
            contact us today to schedule your showing!`,
            price: "$1,750/month",
            location: "7516 Bowdre, San Antonio, TX 78252",
            image: "/images/flat-4.jpg",
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 3,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 2,
                    initialSlide: 2,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className='w-full mx-auto my-20 lg:w-4/5'>
            <div>
                <Slider {...settings}>
                    {
                        advertisedItems.map(advertisedItem =>
                            <div key={advertisedItem._id} className="shadow-xl card ">
                                <figure><img className="w-full rounded-lg h-44" src={advertisedItem.image} alt="Eco Property" /></figure>
                                <div className="shadow-lg card-body">     
                                    <div className="card-body">
                                        <h2 className="card-title">{advertisedItem.title}</h2>
                                        <p className="font-bold">{advertisedItem.price}</p>
                                        <p>{advertisedItem.size}</p>
                                        <p className="font-bold">Location: {advertisedItem.location}</p>
                                    </div>
                                    <button className="w-2/3 mx-auto btn btn-success">See Details</button>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Advertise;
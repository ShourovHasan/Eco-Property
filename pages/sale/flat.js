import Navbar from "../../components/Navbar/Navbar";
import SellCard from "../shared/card";
import SellModal from "../shared/sellModal";

const SellFlat = () => {
    const sellFlats = [
        {
            _id: "1",
            title: "4 Beds Under Construction Flats",
            size: '3,510 Sqft',
            about: '535 Pennsylvania is a gorgeous 4 bedroom / 3 bath, dual level, view condo that has been completely renovated, features hardwood floors and is beaming with natural sunlight. The floorplan is fantastic and features an open floor plan living space complete with water views. The kitchen is a chefs dream with plenty of space to cook and entertain, the living and dining areas beckon you to unwind in the most serene environment while providing the ultimate spaces for entertaining. The main level of the home features a primary bedroom suite that is generous and private plus two more bedrooms. The lower level features a large laundry room with plenty of storage, a luxe full bathroom and the 4th bedroom which would also be a perfect home office or 2nd entertainment space. Directly off the 4th bedroom is the exclusive use and flat, landscaped backyard. Rounding out this offering is 1 car, garage parking + air conditioning',

            price: "$234,100",
            location: "mirpur 10, Dhaka",
            image: "/images/sell-flat-1.jpeg",
        },
        {
            _id: "2",
            title: "Flat For Single Family",
            size: '3,510 Sqft',
            about: `Tucked onto a quiet street just a half block from McLaren Park & Visitacion Valley Greenway, this 2BD/2BA home on 2 levels offers Views of the Valley and San Bruno Mountains, open floor plan, modern updates incl Nest thermostat, spacious yard, abundant storage and off-street parking. Refinished douglas fir hardwood floors stretch through the main level presenting an open living/dining/kitchen/den space w/southern views. Freshly painted, this kitchen is supplied with a new GE gas range/built-in microwave, LG dishwasher, fridge, quartz counters and oodles of storage. The laundry room w/sink and LG washer/dryer is directly adjacent.`,
            price: "$1,75044",
            location: "mirpur 11, Dhaka",
            image: "/images/sell-flat-2.jpeg",
        },
        {
            _id: "2",
            title: "4 Beds Under Construction Flats",
            size: '2,110 Sqft',
            about: ` This incredibly spacious four bedroom, two bathroom home features large windows, a dedicated office/bonus room, private garage and backyard. The neighborhood boasts restaurants, grocery shopping, schools, parks, easy access to I-280 and so much more! Virtual tour link http://www.231thriftstreet.com/ - OPEN HOUSE Saturday 12/10 and Sunday 12/11, from 1:00pm to 4:00pm -
          Listing Agent - Randy Munmon Jr.; Listing Office - Randy Munmon, Broker, MLS#41015522 last updated 18 hours ago. Movoto checked MAXEBRDI for data 56 minutes ago.`,
            price: "$1,750444",
            location: "mirpur 6, Dhaka",
            image: "/images/sell-flat-3.jpeg",
        },
        {
            _id: "2",
            title: "Flat For Single Family",
            size: '2,510 Sqft',
            about: ` An extensive permitted renovation, using high end finishes, modernized this Sunset District home and provides an incredible turn-key opportunity. Period details throughout were lovingly restored, including the charming built-in cabinets flanking the original fireplace. A stunning and thoughtfully designed kitchen, beautiful refinished original wood floors, as well as a very generous backyard with sprinkler system make this an opportunity that can't be missed! This 2 bedroom, 1 bathroom home has the added bonus of a large, unfinished downstairs space, perfect for adding a master suite, family room, or office. Walking distance to public transportation, the very popular Outerlands restaurant, Gus's Community Market, Golden Gate Park, and Ocean beach!`,
            price: "$1,750333",
            location: "mirpur 6, Dhaka",
            image: "/images/sell-flat-4.jpeg",
        },
    ];
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero lg:h-[588px]"
                    style={{ backgroundImage: `url("/images/sell-flat-banner.png")` }}>
                    <div className="hero-overlay "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md bg-slate-700 bg-opacity-50 p-5">
                            <h1 className="mb-5 text-5xl font-bold">Sell your home yourself</h1>
                            <p className="mb-5">Deciding to sell your home yourself is referred to as for-sale-by-owner (FSBO). The FSBO process is similar to traditional selling, but without the help of a real estate agent. In this case, you’re responsible for the home prep, marketing, showings, and negotiations.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
                        <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
                            THE LATEST LISTINGS
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            When selling yourself, start with home prep, staging, and hiring a professional photographer. Once your marketing materials are ready, research comparable homes to help price your home. Then, create a listing on Zillow.
                        </p>
                    </div>
                    <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
                        {
                            sellFlats.map(flat => <SellCard
                                key={flat._id}
                                flat={flat}
                            ></SellCard>)
                        }

                    </div>
                </div>
                <div>
                    <SellModal ></SellModal>
                </div>

            </div>
        </div>
    );
};

export default SellFlat;
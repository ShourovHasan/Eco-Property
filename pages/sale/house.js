import Navbar from "../../components/Navbar/Navbar";
import SellCard from "../shared/card";
import SellModal from "../shared/sellModal";


const SellHouse = () => {
    const sellHouse = [
        {
            _id: "1",
            title: "The Bembridge",
            size:  '3 Katha',
            about: `The Pastures offers village living and great transport links to cities such as Preston and Manchester.

            Enjoy a leisurely pace of life, with village amenities and beautiful countryside on the doorstep. Coastal spots like iconic Blackpool are also an easy drive away.
            
            There are several pre-schools and primaries within a 5-minute drive of The Pastures. They include Moss Side Village Pre-School and Farington Moss St. Paul’s C of E Primary School. `,

            price: "$234,100",
            location: "Mohammadpur, Dhaka.",
            image: "/images/sell-house-1.jpg",
        },
        {
            _id: "2",
            title: " The Kingston",
            size: '4.5 Katha',
            about: `With Tilia Homes, you can always count on quality. Our new homes in Farington Moss are constructed with the best in materials and the latest building methods and approaches. The development is also designed to fit in perfectly with its natural surroundings and create a neighbourhood that makes you feel right at home.

            For added peace of mind, you can also enjoy two years of Tilia Homes Customer Care and the standard 10-year NHBC warranty. This is something we offer on all our properties here at The Pastures. `,
            price: "$1,75044",
            location: "South Konapara Dhaka",
            image: "/images/sell-house-2.jpg",
        },
        {
            _id: "2",
            title: "The Greenwood",
            size: '3.7 Katha',
            about: `A modern three bedroom home featuring an integral garage. The ground floor comprises of a spacious kitchen/dining area and a separate living room. 

            The first floor offers a family bathroom, two good-sized bedrooms and a main bedroom with an en suite.
            This image shows a typical Tilia Homes home and may include optional upgrades at an additional cost. `,
            price: "$1,750444",
            location: "mirpur 6, Dhaka",
            image: "/images/sell-house-3.jpg",
        },
        {
            _id: "2",
            title: "The Chiddingstone",
            size: '3 Katha',
            about: ` A well-proportioned four bedroom home featuring a spacious kitchen/dining/family area, with bi-folding door leading into the garden, a separate living room
            and utility to the ground floor. 
            
            Upstairs, the main bedroom with an en suite can be found alongside three further bedrooms and a family bathroom.
            This image shows a typical Tilia Homes home and may include optional upgrades at an additional cost. `,
            price: "$1,750333",
            location: "mirpur 6, Dhaka",
            image: "/images/sell-house-4.jpg",
        },
    ];
    return (
        <div>
        <Navbar></Navbar>
        <div>
            <div className="hero lg:h-[588px]"
                style={{ backgroundImage: `url("/images/sell-banner.jpg")` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-slate-700 bg-opacity-20 p-5">
                        <h1 className="mb-5 text-5xl font-bold">Identify your motivation for selling</h1>
                        <p className="mb-5">Spend some time exploring your reasons for selling. The process can be arduous and expensive, so make sure you're certain you want to sell before you get too far into it.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
                    <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
                    Complete home improvements
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                    Preparing to sell your home typically takes some work, whether that's your own sweat equity or some professional improvements. After all, you want buyers to fall in love with your home, like you did when you first bought it. Spend some time getting your home move-in ready, in a way that will appeal to the broadest range of potential buyers.
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
                    {
                        sellHouse.map(flat => <SellCard
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

export default SellHouse;
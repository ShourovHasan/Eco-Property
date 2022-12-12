import Navbar from "../../components/Nevbar/Navbar";
import SellCard from "../shared/card";
import SellModal from "../shared/sellModal";


const SellPlot = () => {
   
        const sellPlots = [
            {
                _id: "1",
                title: "Modhu City Ready Plot",
                size: ' 3 Katha',
                about: 'This plot is designed with your desired home in mind. It will not only offer you a pleasant lifestyle but also will offer you complete privacy and security to ensure that your family and guests have a safe and enjoyable time. It also offers you a very good payment plan. ',
    
                price: "$234,100",
                location: "Mohammadpur, Dhaka.",
                image: "/images/sell-plot-1.jpg",
            },
            {
                _id: "2",
                title: " Available For Sale In Konapara",
                size: '4.5 Katha',
                about: `This plot is designed with your desired home in mind. It will not only offer you a pleasant lifestyle but also will offer you complete privacy and security to ensure that your family and guests have a safe and enjoyable time. It also offers you a very good payment plan. `,
                price: "$1,75044",
                location: "South Konapara Dhaka",
                image: "/images/sell-plot-2.jpg",
            },
            {
                _id: "2",
                title: "Plot is now available for sale in South Keraniganj,",
                size: '3.7 Katha',
                about: `This plot is designed with your desired home in mind. It will not only offer you a pleasant lifestyle but also will offer you complete privacy and security to ensure that your family and guests have a safe and enjoyable time. It also offers you a very good payment plan. `,
                price: "$1,750444",
                location: "mirpur 6, Dhaka",
                image: "/images/sell-plot-3.jpg",
            },
            {
                _id: "2",
                title: "Residential Plot Is Up For Sale At Kushumbag",
                size: '3 Katha',
                about: ` This plot is designed with your desired home in mind. It will not only offer you a pleasant lifestyle but also will offer you complete privacy and security to ensure that your family and guests have a safe and enjoyable time. It also offers you a very good payment plan. `,
                price: "$1,750333",
                location: "mirpur 6, Dhaka",
                image: "/images/sell-plot-4.jpg",
            },
        ];
        return (
            <div>
                <Navbar></Navbar>
                <div>
                    <div className="hero lg:h-[588px]"
                        style={{ backgroundImage: `url("/images/sell-plot-banner.png")` }}>
                        <div className="hero-overlay "></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md bg-slate-700 bg-opacity-60 p-5">
                                <h1 className="mb-5 text-5xl font-bold">Open Plots ready to occupy</h1>
                                <p className="mb-5">We was established with a mission to provide top-class Residential Plots and Open Plots. With two decades of experience and we are one of the most trusted real estate companies for home-buyers and investors in Greater Hyderabad. We are one of the most accomplished brands for residential and open plots.</p>
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
                                sellPlots.map(flat => <SellCard
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

export default SellPlot;
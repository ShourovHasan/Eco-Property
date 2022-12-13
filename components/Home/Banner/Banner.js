const Banner = () => {
    
    return (
        <div
            className="mb-5 min-h-[296px] hero my-10"
            style={{ backgroundImage: `url("/images/flat-4.png")` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="">
                    <div className="mb-5">
                        <h2 className="text-xl">Welcome to</h2>
                        <h1 className="text-5xl font-bold">Eco Property</h1>
                        <h3 className="text-2xl">Discover your perfect house, flat and plot</h3>
                    </div>
                    <button className="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
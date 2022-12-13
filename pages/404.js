import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
    return (
        <div
            className="min-h-screen mb-5 hero"
            style={{ backgroundImage: `url("/404_error.png")` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
                <Link href={'/'} className='flex justify-center'>
                    <button className="btn btn-primary">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
        // <div>
        //     <Image src={'/404_error.png'} className='mx-auto'  width={800} height={700}></Image>
        //     <Link href={'/'} className='flex justify-center'>
        //         <button className="btn btn-primary">
        //             Back to Home
        //         </button>
        //     </Link>
        // </div>
    );
};

export default PageNotFound;
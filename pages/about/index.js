import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import navbar from '../../styles/Navbar.module.css';

const index = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="my-20">
                <h2 className='mb-5 text-5xl font-bold text-center '>About US</h2>
                
                <div className='w-4/5 mx-auto mt-10 lg:w-2/3 card lg:mt-0'>
                    <div className={navbar.about}>
                        <h2 className='text-3xl font-bold text-center'>Eco Property</h2>
                        <p className='text-justify'>Our Eco Property real estate company is committed to providing clients with the best in eco-friendly real estate solutions. We specialize in green building, sustainable development, and renewable energy. We understand the importance of protecting the environment and strive to reduce our carbon footprint by using efficient and sustainable building techniques. Our experienced professionals are dedicated to helping our clients find the perfect eco-friendly real estate solution. We provide comprehensive services, including energy assessments, green building design, renewable energy options, sustainable development, and green building certification. We strive to maintain an eco-friendly approach to all our projects and to reduce our environmental impact. Our goal is to help our clients make the most informed decisions when it comes to their real estate investments. We are dedicated to providing an environmentally responsible real estate solution that meets our client's needs.</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;
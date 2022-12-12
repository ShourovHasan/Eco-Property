import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


const contact = () => {
    const form = useRef();
    // const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1z619pv', 'template_7nhyg6h', form.current, 'xYEqqYxuWpuzvtzS1')
            .then((result) => {
                e.target.reset();
                toast.success('mail send successfully')
                console.log(result.text);
                // navigate('/');
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="my-20">
                <h2 className='mb-5 text-5xl font-bold text-center '>Contact US</h2>
                {/* <div className='grid grid-cols-1 mx-auto lg:grid-cols-2 '> */}
                    {/* <div className='mx-auto lg:w-1/2 card'>
                        <div class="flex flex-col w-96 p-5 shadow-xl shadow-neutral rounded-xl card-body mx-auto text-xl">
                            <h2 className='mt-5 text-4xl font-bold mb-7'>Get in touch</h2>
                            <div>
                                <p>If a suitable project comes, I'm always open to freelancing employment. Contact me at any time!</p>
                            </div>
                            <div class="flex">
                                <div class="font-bold ">
                                    <p>Phone:</p>
                                    <p>Email:</p>
                                    <p>Address:</p>
                                </div>
                                <div class="ml-1">
                                    <p>+8801786558637</p>
                                    <p>shourovhasan91@gmail.com</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <h3 className='mt-5 text-3xl'>Social Media</h3>
                            <div className="flex flex-row gap-5 mx-10 mt-3">
                                <a href='https://github.com/ShourovHasan' target="_blank" rel="noopener noreferrer" aria-label='Github'><FaGithub className='text-xl duration-300 ease-in-out hover:text-2xl hover:text-base-300'></FaGithub></a>

                                <a href='https://www.linkedin.com/in/md-shourov-hasan/' target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'><FaLinkedinIn className='text-xl duration-300 ease-in-out hover:text-2xl hover:text-base-300'></FaLinkedinIn></a>

                                <a href='https://app.netlify.com/teams/shourovhasan/overview' target="_blank" rel="noopener noreferrer" aria-label='Netlify'><img src={`images/social/netlify.png`} className='w-5 duration-300 ease-in-out hover:w-7' alt='' /></a>

                                <a href='https://www.facebook.com/shasan74/' target="_blank" rel="noopener noreferrer" aria-label='Facebook'><FaFacebookF className='text-xl duration-300 ease-in-out hover:text-2xl hover:text-base-300'></FaFacebookF></a>
                            </div>
                        </div>
                    </div> */}
                    <div className='mx-auto mt-10 lg:w-1/2 card lg:mt-0'>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col p-10 mx-auto shadow-xl shadow-neutral w-96 rounded-xl card-body'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='user_name' placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='user_email' placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' placeholder="write your valuable message here" className="h-20 input input-bordered" required />
                            </div>
                            <div className="mt-2 form-control">
                                <input type="submit" className="btn btn-outline" value="Send" />
                            </div>
                        </form>
                    </div>
                {/* </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default contact;
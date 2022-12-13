import { useRef } from "react";
// import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import navbar from '../../styles/Navbar.module.css';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

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
                
                <div className='w-4/5 mx-auto mt-10 lg:w-2/3 card lg:mt-0'>
                    <div className={navbar.contact}>
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
                    </div>
                {/* </div> */}
            </div>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default contact;
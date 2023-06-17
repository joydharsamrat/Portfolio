import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { FaMobileAlt, FaWhatsappSquare, FaMailBulk, FaAddressCard } from "react-icons/fa";

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1svuh1q', 'template_m7488xo', form.current, 'yKzn9Z4nQeo_9o-1N')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast.success('Email sent')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='dark:text-white my-12' id='contact'>
            <h1 className='mt-12 pt-1 mb-10 text-5xl font-bold '>Get In Touch</h1>

            <div className='grid lg:grid-cols-3 gap-10 justify-around'>
                <div data-aos="fade-right" className='bg-white dark:bg-gray-600 p-5 rounded'>
                    <h3 className='text-5xl mb-5'>Contacts</h3>
                    <div className='flex items-center gap-3 my-2'>
                        <p className='p-2 h-12 w-12 rounded-full flex justify-center items-center bg-[#e7ecef] dark:bg-gray-800'><FaMobileAlt className='text-2xl'></FaMobileAlt></p>
                        <p className='my-3'><span className='text-3xl'>Mobile</span> <br /> +8801788738658</p>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <p className='p-2 h-12 w-12 rounded-full flex justify-center items-center bg-[#e7ecef] dark:bg-gray-800'><FaWhatsappSquare className='text-2xl'></FaWhatsappSquare></p>
                        <p className='my-3'><span className='text-3xl'>Whatsapp</span> <br /> +8801788738658</p>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <p className='p-2 h-12 w-12 rounded-full flex justify-center items-center bg-[#e7ecef] dark:bg-gray-800'><FaMailBulk className='text-2xl'></FaMailBulk></p>
                        <p className='my-3'><span className='text-3xl'>Email</span> <br />joydharsamrat@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <p className='p-2 h-12 w-12 rounded-full flex justify-center items-center bg-[#e7ecef] dark:bg-gray-800'><FaAddressCard className='text-2xl'></FaAddressCard></p>
                        <p className='my-3'><span className='text-3xl'>Address</span> <br /> 79/3, Haji Ismail Link Road Banargati <br />Khulna, Bangladesh</p>
                    </div>
                </div>
                <div data-aos="fade-down" className='lg:col-span-2 p-5 rounded-xl mt-12 lg:mt-0'>
                    <h3 className='text-5xl mb-5'>Message Me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='my-3'>
                            <label>Name</label>
                            <input className='w-full input rounded-none border-b-gray-600 dark:border-b-gray-300 border-x-0 border-t-0 bg-[#e7ecef] dark:bg-gray-800' type="text" name="name" />
                        </div>
                        <div className='my-3'>
                            <label>Subject</label>
                            <input className='input rounded-none border-b-gray-600 dark:border-b-gray-300 border-x-0 border-t-0 w-full bg-[#e7ecef] dark:bg-gray-800' type="text" name="subject" />
                        </div>
                        <div className='my-3'>
                            <label>Email</label>
                            <input className='input rounded-none border-b-gray-600 dark:border-b-gray-300 border-x-0 border-t-0 w-full bg-[#e7ecef] dark:bg-gray-800' type="email" name="email" />
                        </div>
                        <div className='my-3'>
                            <label>Message</label>
                            <textarea className='textarea rounded-none border-b-gray-600 dark:border-b-gray-300 border-x-0 border-t-0 w-full bg-[#e7ecef] dark:bg-gray-800' name="message" />
                        </div>
                        <input className='btn btn-outline dark:text-white' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};
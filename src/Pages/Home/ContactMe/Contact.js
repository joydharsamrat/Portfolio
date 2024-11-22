import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import {
  FaMobileAlt,
  FaWhatsappSquare,
  FaMailBulk,
  FaAddressCard,
} from "react-icons/fa";

export const ContactMe = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_1svuh1q",
        "template_m7488xo",
        form.current,
        "yKzn9Z4nQeo_9o-1N"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Email sent");
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="text-white my-12" id="contact">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Get In Touch
      </h1>

      <div className="grid lg:grid-cols-3 gap-10 justify-around">
        <div className="bg-gray-600 p-5 rounded bg-opacity-30 bg-clip-padding backdrop-blur-sm">
          <h3 className="text-3xl lg:text-5xl mb-5">Contacts</h3>
          <div className="flex items-center gap-3 my-2">
            <p className="p-2 h-12 w-12 rounded-full flex justify-center items-center bg-gray-800">
              <FaMobileAlt className="text-2xl"></FaMobileAlt>
            </p>
            <p className="my-3">
              <span className="text-3xl">Mobile</span> <br /> +8801788738658
            </p>
          </div>
          <div className="flex items-center gap-3 my-2">
            <p className="p-2 h-12 w-12 rounded-full flex justify-center items-center  bg-gray-800">
              <FaWhatsappSquare className="text-2xl"></FaWhatsappSquare>
            </p>
            <p className="my-3">
              <span className="text-3xl">Whatsapp</span> <br /> +8801788738658
            </p>
          </div>
          <div className="flex items-center gap-3 my-2">
            <p className="p-2 h-12 w-12 rounded-full flex justify-center items-center bg-gray-800">
              <FaMailBulk className="text-2xl"></FaMailBulk>
            </p>
            <p className="my-3">
              <span className="text-3xl">Email</span> <br />
              joydharsamrat@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-3 my-2">
            <p className="p-2 h-12 w-12 rounded-full flex justify-center items-center bg-gray-800">
              <FaAddressCard className="text-2xl"></FaAddressCard>
            </p>
            <p className="my-3">
              <span className="text-3xl">Address</span> <br />
              Gouripur <br />
              Mymensingh, Bangladesh
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 p-5 rounded-xl mt-12 lg:mt-0">
          <h3 className="text-3xl lg:text-5xl mb-5">Message Me</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="my-3">
              <label>Name</label>
              <input
                className="w-full input rounded-none border-b-gray-300 border-x-0 border-t-0 bg-gray-800"
                type="text"
                name="name"
              />
            </div>
            <div className="my-3">
              <label>Subject</label>
              <input
                className="input rounded-none border-b-gray-300 border-x-0 border-t-0 w-full bg-gray-800"
                type="text"
                name="subject"
              />
            </div>
            <div className="my-3">
              <label>Email</label>
              <input
                className="input rounded-none border-b-gray-300 border-x-0 border-t-0 w-full bg-gray-800"
                type="email"
                name="email"
              />
            </div>
            <div className="my-3">
              <label>Message</label>
              <textarea
                className="textarea rounded-none border-b-gray-300 border-x-0 border-t-0 w-full bg-gray-800"
                name="message"
              />
            </div>
            <input
              className="btn btn-outline text-white hover:bg-gray-600"
              type="submit"
              value={`${isLoading ? "Sending..." : "Send"}`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

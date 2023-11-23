import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import "swiper/css";
import "../Projects/projects.css";

const ProjectsSummary = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  console.log(activeSlide);

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    if (index > 2) {
      setActiveSlide(index % 3);
    } else {
      setActiveSlide(index);
    }
  };
  return (
    <div className=" text-white mb-12 py-5 min-h-[700px]" id="projects">
      <h1 className="mt-12 mb-12 text-3xl lg:text-5xl font-bold ">
        Some Projects I've worked On
      </h1>
      <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="card h-full lg:p-10">
            {activeSlide === 0 && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl text-center font-semibold mb-5">
                    Happy Learning
                  </h2>
                  <p className="text-sm">
                    Happy Learning is a website for online courses in different
                    programming languages.
                  </p>

                  <p className="my-5">
                    Front-end is developed with React.js and the back end is
                    created with Express.js. Users can buy a course from the
                    website after login. Also, download Or print option for
                    course details. Easy to find questions answered from the faq
                    section.
                  </p>

                  <p className="text-xs">
                    technologies Used : React, Express js, Tailwind CSS,
                    MongoDB, Firebase,.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <motion.a
                    target="_blank"
                    href="https://happy-learning-9da3f.firebaseapp.com/"
                    whileHover={{ scale: 1.1 }}
                    className="p-1 border h-8 w-8 text-gray-400 border-gray-600 rounded-full flex items-center justify-center  hover:border-blue-500"
                  >
                    <FaGithubSquare className=" text-2xl"></FaGithubSquare>
                  </motion.a>
                  <motion.a
                    target="_blank"
                    href="https://happy-learning-9da3f.firebaseapp.com/"
                    whileHover={{ scale: 1.1 }}
                    className="p-1 border h-8 w-8 text-gray-400 border-gray-600 rounded-full flex items-center justify-center  hover:border-blue-500"
                  >
                    <img
                      src="https://i.ibb.co/mq8j9HP/web-removebg-preview.png"
                      alt=""
                    />
                  </motion.a>
                </div>
              </div>
            )}
            {activeSlide === 1 && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl text-center font-semibold mb-5">
                    MobiHub
                  </h2>
                  <p className="text-sm">
                    MobiHub Is a mobile phone resale website.
                  </p>
                  <p className="my-5">
                    Front-end is developed with React.js and the back end is
                    created with Express.js. It has a Firebase authentication
                    system. And JWT has been used too to make the website safer.
                    Users can log in as sellers or buyers. Sellers can post
                    their products for sale. And buyers can book products they
                    like and pay for them by card. there can be 3 types of users
                    on this website, Admin,Seller and buyer every type of user
                    has different dashboard routes, one can not enter other
                    users route. User must login to book any product or see
                    his/her booked product or pay for that. A user can add a
                    product to his/her wishlist to buy letter If there is any
                    issue with any product user can report it to the admin,
                    Admin can delete reported product , any any user
                  </p>

                  <p className="text-xs">
                    technologies Used : React, Express js, Tailwind CSS,
                    MongoDB, Firebase, Stripe.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <motion.a
                    target="_blank"
                    href="https://mobihub-521d5.web.app/"
                    whileHover={{ scale: 1.1 }}
                    className="p-1 border h-8 w-8 text-gray-400 border-gray-600 rounded-full flex items-center justify-center  hover:border-blue-500"
                  >
                    <FaGithubSquare className=" text-2xl"></FaGithubSquare>
                  </motion.a>
                  <motion.a
                    target="_blank"
                    href="https://mobihub-521d5.web.app/"
                    whileHover={{ scale: 1.1 }}
                    className="p-1 border h-8 w-8 text-gray-400 border-gray-600 rounded-full flex items-center justify-center  hover:border-blue-500"
                  >
                    <img
                      src="https://i.ibb.co/mq8j9HP/web-removebg-preview.png"
                      alt=""
                    />
                  </motion.a>
                </div>
              </div>
            )}
            {activeSlide === 2 && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl text-center font-semibold mb-5">
                    Storyteller
                  </h2>
                  <p className="text-sm">
                    Storyteller is a wedding photographer hiring and reviewing
                    website.
                  </p>

                  <p className="my-5">
                    Front-end is developed with React.js and the back end is
                    created with Express.js. The admin can post his/her packages
                    of photography.Users can see the services admin provide. And
                    users can add, edit and delete reviews about services they
                    have received.
                  </p>
                  <p className="text-xs">
                    technologies Used : React, Express js, Tailwind CSS,
                    MongoDB, Firebase,.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <motion.a
                    target="_blank"
                    href="https://github.com/joydharsamrat/storyteller"
                    whileHover={{ scale: 1.1 }}
                    className="p-1 border h-8 w-8 text-gray-400 border-gray-600 rounded-full flex items-center justify-center  hover:border-blue-500"
                  >
                    <FaGithubSquare className=" text-2xl"></FaGithubSquare>
                  </motion.a>
                  <motion.a
                    target="_blank"
                    href="https://storyteller-c49cf.web.app/"
                    whileHover={{ scale: 1.1 }}
                    className="p-1 border h-8 w-8 text-gray-400 border-gray-600 rounded-full flex items-center justify-center  hover:border-blue-500"
                  >
                    <img
                      src="https://i.ibb.co/mq8j9HP/web-removebg-preview.png"
                      alt=""
                    />
                  </motion.a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={"auto"}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1150: {
                slidesPerView: 2,
              },
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            loop={true}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`card lg:w-72 h-96 bg-gray-600 shadow-xl border bg-opacity-30 bg-clip-padding backdrop-blur-sm ${
                    !isActive &&
                    "opacity-25 border-0 bg-opacity-100  backdrop-blur-none "
                  }`}
                >
                  <div className="h-full overflow-y-hidden hover:overflow-y-scroll px-5 pt-5 element">
                    <img
                      className="rounded-xl w-full"
                      src="https://i.ibb.co/QbSQpDZ/Happy-Learning.png"
                      alt=""
                    />
                  </div>

                  <div className="py-2 flex flex-col justify-between items-center gap-5">
                    <h2 className="card-title">Happy Learning</h2>
                    <motion.a
                      target="_blank"
                      href="https://happy-learning-9da3f.firebaseapp.com/"
                      whileHover={{ scale: 1.1 }}
                      className="p-1 border h-8 w-8 border-gray-300 rounded-full flex items-center justify-center"
                    >
                      <img
                        src="https://i.ibb.co/mq8j9HP/web-removebg-preview.png"
                        alt=""
                      />
                    </motion.a>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`card lg:w-72 h-96 bg-gray-600 shadow-xl border bg-opacity-30 bg-clip-padding backdrop-blur-sm  ${
                    !isActive &&
                    "opacity-25 border-0 bg-opacity-100 backdrop-blur-none "
                  }`}
                >
                  <div className="h-full overflow-y-hidden hover:overflow-y-scroll px-5 pt-5 element">
                    <img
                      className=" w-full rounded-xl "
                      src="https://i.ibb.co/7nnydMd/Mobi-Hub-Home-2.png"
                      alt=""
                    />
                  </div>
                  <div className="py-2 flex flex-col justify-between items-center gap-5">
                    <h2 className="card-title text-center">MobiHub</h2>

                    <motion.a
                      target="_blank"
                      href="https://mobihub-521d5.web.app/"
                      whileHover={{ scale: 1.1 }}
                      className="p-1 border h-8 w-8 border-gray-300  rounded-full flex items-center justify-center  hover:border-blue-500"
                    >
                      <img
                        src="https://i.ibb.co/mq8j9HP/web-removebg-preview.png"
                        alt=""
                      />
                    </motion.a>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`card lg:w-72 h-96 bg-gray-600 shadow-xl border bg-opacity-30 bg-clip-padding backdrop-blur-sm  ${
                    !isActive &&
                    "opacity-25 border-0 bg-opacity-100  backdrop-blur-none "
                  }`}
                >
                  <div className="h-full overflow-y-hidden hover:overflow-y-scroll px-5 pt-5 element">
                    <img
                      className=" w-full rounded-xl "
                      src="https://i.ibb.co/zsYFWyC/storyteller.png"
                      alt=""
                    />
                  </div>
                  <div className="py-2 flex flex-col justify-between items-center gap-5">
                    <h2 className="card-title">Storyteller</h2>

                    <motion.a
                      target="_blank"
                      href="https://storyteller-c49cf.web.app/"
                      whileHover={{ scale: 1.1 }}
                      className="p-1 border h-8 w-8 border-gray-300 rounded-full flex items-center justify-center "
                    >
                      <img
                        src="https://i.ibb.co/mq8j9HP/web-removebg-preview.png"
                        alt=""
                      />
                    </motion.a>
                  </div>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSummary;

import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import { ContactMe } from "./ContactMe/Contact";
import ProjectsSummary from "./Projects/ProjectsSummary";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Experience from "./Experience/Experience";

const Home = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch(
        "https://portfoloi-server.vercel.app/api/v1/profile"
      );

      const profileData = await res.json();
      setProfile(profileData.data);
    };

    getProfile();
  }, []);

  return (
    <div>
      <Banner profile={profile}></Banner>
      <About about={profile?.about}></About>
      <Experience></Experience>
      <Skills></Skills>
      <ProjectsSummary></ProjectsSummary>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;

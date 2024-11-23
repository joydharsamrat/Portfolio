import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import NavLink from "../../components/Navlink";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    let timeoutId;

    const handleScrollWithTimeout = () => {
      handelScroll();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScroll(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScrollWithTimeout);

    return () => {
      window.removeEventListener("scroll", handleScrollWithTimeout);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-40 bg-gray-800 w-full max-w-[1350px] ${
        scroll && "bg-opacity-30 bg-clip-padding backdrop-blur-sm"
      }`}
    >
      <div className="navbar top-0 text-white lg:px-12">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-gray-600 menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li>
                <HashLink smooth to="#about">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#experience">
                  Experience
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#skills">
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#projects">
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#blogs">
                  Blogs
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
          <NavLink href="#top" className="btn btn-ghost normal-case text-xl">
            SAMRAT
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <NavLink href="#about">About</NavLink>
              </li>
              <li>
                <NavLink href="#experience">Experience</NavLink>
              </li>
              <li>
                <NavLink href="#skills">Skills</NavLink>
              </li>
              <li>
                <NavLink href="#projects">Projects</NavLink>
              </li>
              <li>
                <NavLink href="#blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink href="#contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useNavigate, useLocation } from "react-router-dom";

const NavLink = ({ href, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event) => {
    event.preventDefault();
    const sectionId = href.slice(1); // Remove the "#" to get the target ID

    if (location.pathname !== "/") {
      // If not on the home page, navigate to home and scroll after loading
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // If on the home page, scroll immediately
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition - 70, // Adjust for header height
        behavior: "smooth",
      });
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default NavLink;

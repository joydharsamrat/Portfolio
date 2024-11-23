import { useNavigate, useLocation } from "react-router-dom";

const NavLink = ({ href, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event) => {
    event.preventDefault();
    const sectionId = href.slice(1); // Remove the "#" to get the target ID

    if (location.pathname !== "/") {
      // Navigate to home with state indicating the target section
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // Directly scroll if already on the home page
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
      window.history.replaceState(null, null, `#${sectionId}`);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default NavLink;

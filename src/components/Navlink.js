
const NavLink = ({ href, children }) => {

    const handleClick = (event) => {
        event.preventDefault();
        const targetElement = document.getElementById(href.slice(1));
        const targetPosition = targetElement.offsetTop;
        window.scrollTo({
            top: targetPosition - 70,
            behavior: 'smooth',
        });
        window.history.pushState(null, null, href);
    };

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    );
};

export default NavLink;
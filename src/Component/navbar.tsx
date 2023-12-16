import { useEffect, useState } from "react";
import "../index.css";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("Navbar");
      if (window.scrollY >= 10) {
        navbar.classList.add("Sticky");
        navbar.classList.remove("NavBar");
      } else {
        navbar.classList.remove("Sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Navbar" id="Navbar">
        {/* <div className="LogoDiv">
          <div className="Logo"></div>
        </div> */}
        <div className="NavigationDiv">
          <div className="NavLink">Home</div>
          <div className="NavLink">About</div>
          <div className="NavLink">FAQ's</div>
          <div className="NavLink">Viswa Forum</div>
          <div className="NavLink">Panelists</div>
        </div>
      </div>
      <div className="MBody">
        <div className="Keyboard">
          <span className="key">V</span>
          <span className="key">I</span>
          <span className="key">S</span>
          <span className="key">H</span>
          <span className="key">W</span>
          <span className="key">A</span>
          <span className="key">C</span>
          <span className="key">O</span>
          <span className="key">N</span>
          <span className="key">C</span>
          <span className="key">L</span>
          <span className="key">A</span>
          <span className="key">V</span>
          <span className="key">E</span>
        </div>
      </div>
    </>
  );
}
export default Navbar;

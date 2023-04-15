import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/images/logo.png"


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
    setClick(!click);
  };
  return (
    <>
      <div className="navbar">
          <div className="nav-phone">
            <div className="nav-logo">
              <NavLink to="/" className="logo-image" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo" />
              </NavLink>
            </div>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

          </div>


          <ul className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}  >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={handleClick} >
                About
              </NavLink>
            </li>

            <li className="">
              <div className="nav-item">
                <button className="nav-dropbtn">
                  <NavLink to="/team" className="nav-links" onClick={handleClick}>
                    Team <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </NavLink>
                </button>
                <div className="dropdown-content">
                  <NavLink to="/team" className="drop-nav-links" onClick={handleClick}>
                    Current Team
                  </NavLink>

                  <NavLink to="/team/past-team" className="drop-nav-links" onClick={handleClick}>
                    Past Secretaries
                  </NavLink>

                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                to="/events" className="nav-links" onClick={handleClick} >
                Events
              </NavLink>
            </li>


            <li>
              <div className="nav-item">
                <button className="nav-dropbtn">
                  <NavLink to="/material/blogs" className="nav-links" onClick={handleClick}>
                    Material <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </NavLink>
                </button>
                <div className="dropdown-content">
                  <NavLink to="/material/blogs" className="drop-nav-links" onClick={handleClick} >
                    Blogs
                  </NavLink>

                  <NavLink to="/material/placement-talks" className="drop-nav-links" onClick={handleClick}>
                    Placement Talks Videos
                  </NavLink>

                </div>
              </div>
            </li>



            <li className="nav-item">
              <NavLink to="/clubs" className="nav-links" onClick={handleClick} >
                Clubs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-links" onClick={handleClick} >
                Contact Us
              </NavLink>
            </li>

          </ul>

        

      </div>
    </>

  )
}

export default Navbar
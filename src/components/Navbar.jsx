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
                <div className="nav-container">
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
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="">
                            <div className="nav-item">
                                <button className="nav-dropbtn">
                                    <NavLink
                                        to="/team"
                                        className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                        onClick={handleClick}

                                    >
                                        Team <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </NavLink>
                                </button>
                                <div className="dropdown-content">
                                    <NavLink
                                        to="/team/current"
                                        className={({ isActive }) => (isActive ? 'active-drop' : 'drop-nav-links')}
                                        onClick={handleClick}

                                    >
                                        Current Team
                                    </NavLink>
                                    

                                    <NavLink
                                        to="/team/past-team"
                                        className={({ isActive }) => (isActive ? 'active-drop' : 'drop-nav-links')}
                                        onClick={handleClick}

                                    >
                                       Past Team
                                    </NavLink>

                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/events"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                               Events
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/material"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                               Material
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </>

  )
}

export default Navbar
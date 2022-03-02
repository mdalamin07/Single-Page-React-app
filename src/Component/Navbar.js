import React,{useEffect} from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import "./Navbar.css";
import * as Scroll from 'react-scroll';
// import {NavLink} from "react-router-dom";

const Navbar = () => {
    let Link = Scroll.Link;
    const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 100 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['Navbar'];
  if(scrolled){
    x.push('scrolled');
  }
    return (
       <>
        <div className={x.join(" ")}>
            <nav className="navbar navbar-expand-sm header">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="home">Web Dev</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon">DehazeIcon</span> */}
                    <DehazeIcon/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link  className="nav-link" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       </>
    );
};

export default Navbar;

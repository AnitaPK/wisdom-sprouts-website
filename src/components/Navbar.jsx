"use client";
import Link from "next/link";
import Image from "next/image";
import LOGO from '../../public/logo.png'
import { usePathname } from "next/navigation"; 
import "./Navbar.css"
import { useEffect, useRef, useState } from "react";
export default function Navbar() {
   const pathname = usePathname();
   const [isFixed, setIsFixed] = useState(false);
   const [isPastTop, setIsPastTop] = useState(false);
   const [navHeight, setNavHeight] = useState(0);
   const navRef = useRef(null);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Courses", path: "/courses" },
    { name: "Placements", path: "/placements" },
    { name: "Internship", path: "/internship" },
    { name: "Gallery", path: "/gallery" },
    { name: "Hire From Us", path: "/hire-from-us" },
  ];
   useEffect(() => {
     const onScroll = () => {
       const scrollY = window.scrollY || window.pageYOffset;
       const viewportH = window.innerHeight;
       setIsFixed(scrollY >= viewportH);
       setIsPastTop(scrollY > 4);
     };
     onScroll();
     window.addEventListener('scroll', onScroll, { passive: true });
     return () => window.removeEventListener('scroll', onScroll);
   }, []);

   useEffect(() => {
     const updateHeight = () => {
       if (navRef.current) {
         setNavHeight(navRef.current.offsetHeight || 0);
       }
     };
     updateHeight();
     window.addEventListener('resize', updateHeight);
     return () => window.removeEventListener('resize', updateHeight);
   }, []);

  return (
    <div className={"navbar-outer-wrapper " + (isFixed ? " is-fixed" : "pt-5") }>
    <nav ref={navRef} className={"navbar navbar-expand-lg custom_navbar" + (isPastTop ? " nav-blur" : "") }>
      <div className="container">
        
        {/* Left: Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src={LOGO} 
            alt="Logo" 
            width={150} 
            height={70.33} 
            className="me-2 object-fit-contain"
          />
        </Link>

        {/* Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle Menu + Right Button (collapsible) */}
        <div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav mx-auto">
              {navItems.map((item) => (
                
                <li key={item.path} className="nav-item">
                  <Link 
                    href={item.path} 
                    className={`nav-link ${pathname === item.path ? "active-link" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          {/* Right: Contact Us Button */}
          <div className="d-flex">
            <Link href="/contactus" className="custom-orange-button">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
    <div style={{ height: isFixed ? navHeight : 0 }}></div>
    </div>
  );
}

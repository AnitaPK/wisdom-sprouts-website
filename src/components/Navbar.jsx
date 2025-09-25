import Link from "next/link";
import Image from "next/image";
import LOGO from '../../public/logo.png'

export default function Navbar() {
  return (
    <div className=""
      style={{
        backgroundColor: "#D2E6E4", 
        backgroundImage: "url('/curveImage.png')", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
         width: "100%",
        // minHeight: "100px", 
        height:"189px"
      }}>
    <nav className="navbar navbar-expand-lg custom_navbar">
      <div className="container">
        
        {/* Left: Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src={LOGO} 
            alt="Logo" 
            width={150} 
            height={83.33} 
            className="me-2"
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
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/courses" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link href="/placements" className="nav-link">Placements</Link>
            </li>
            <li className="nav-item">
              <Link href="/internship" className="nav-link">Internship</Link>
            </li>
            <li className="nav-item">
              <Link href="/gallery" className="nav-link">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link href="/internship" className="nav-link">Hire From Us</Link>
            </li>
            
          </ul>

          {/* Right: Contact Us Button */}
          <div className="d-flex">
            <Link href="/contactus" className="custom-orange-button">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

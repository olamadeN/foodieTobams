import logo from '../../image/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import './navbar.css';
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="nav container">
                <img src={logo} className="navLogo" alt="foodieland logo" />
                <ul className="navLinks">
                    <HashLink smooth='True' to="/"><li className="link">Home</li></HashLink>
                    <li className="link">Recipes</li>
                    <li className="link">Blog</li>
                    <li className="link">Contact</li>
                    <li className="link">About Us</li>
                </ul>
                <div className="socials">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;
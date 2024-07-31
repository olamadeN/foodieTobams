import logo from '../../image/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './navbar.css';
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="nav container">
                <img src={logo} className="navLogo" alt="foodieland logo" />
                <ul className="navLinks">
                    <li className="link">Home</li>
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
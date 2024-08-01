import './footer.css';
import logo from "../../image/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return ( 
        <div className="footer container section">
            <div className="topLayer">
                <div className="left">
                    <img src={logo} alt="" className="footerImg" />
                    <p className="footersubTitle">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                    </p>
                </div>
                <div className="right">
                    <ul>
                        <li>Recipes</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
            <div className="bottomLayer">
                <br />
                <div className="bLayerContent">
                    <p className="copyright">&copy; 2020 Flowbase. Powered by <span style={{color:'red'}}>Webflow</span> </p>
                    <div className="footerSocials">
                        <div className="fsp">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
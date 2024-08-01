import { FaStopwatch } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import LazyLoad from 'react-lazy-load';
import './card.css';
const RecipeCard = ({data, width, height, font, smallFont, bg}) => {
    const {img,title,time,type,id} = data
    const style = {
        height:height,
        width:width,
        background:bg
    }
    const [click, setClick] = useState(false);
    const onClicked = () => {
        if (click) {
            setClick(false)
        }else{
            setClick(true)
        }
    }
    return ( 
        <div style= {style} className="recipeCard" id={id} data-testid='cardTestId' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="120" data-aos-duration="600">
            <LazyLoad><img src={img} alt="" className="cardImg" /></LazyLoad>
            <div className="like">
                <FaHeart onClick={onClicked} size={19}  color={click ? 'red' : 'silver'}/>
            </div>            
            <div className="shift">
                <HashLink smooth='True' to="/recipe-details#top"><p style={{fontSize:font}} className="cardRecipeName">{title}</p></HashLink>
                <div className="cardOtherDetails">
                    <span className="duration"><FaStopwatch size={25} /> <p style={{fontSize:smallFont, marginTop:15}}>{time}</p></span>
                    <span className="type"><PiForkKnifeFill size={25}/>  <p style={{fontSize:smallFont, marginTop:15}}>{type}</p></span>
                </div> 
            </div>
            
        </div>
    );
}
 
export default RecipeCard;
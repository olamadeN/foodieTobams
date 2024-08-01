import { FaStopwatch } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
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
        <div style= {style} className="recipeCard" id={id}>
            <img src={img} alt="" className="cardImg" />
            <div className="like">
                <FaHeart onClick={onClicked} size={19}  color={click ? 'red' : 'silver'}/>
            </div>            
            <div className="shift">
               <p style={{fontSize:font}} className="cardRecipeName">{title}</p>
                <div className="cardOtherDetails">
                    <span className="duration"><FaStopwatch size={25} /> <p style={{fontSize:smallFont, marginTop:15}}>{time}</p></span>
                    <span className="type"><PiForkKnifeFill size={25}/>  <p style={{fontSize:smallFont, marginTop:15}}>{type}</p></span>
                </div> 
            </div>
            
        </div>
    );
}
 
export default RecipeCard;
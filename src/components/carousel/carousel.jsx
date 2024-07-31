import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import bgRight from '../../image/carousel/carouselBg.png';
import badge from '../../image/carousel/recipe.png';
import authorImg from '../../image/carousel/writer.png';
import thumbsUp from '../../image/carousel/Badge.png';
import { FaStopwatch } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { RiPlayCircleLine } from "react-icons/ri";
const CarouselComponent = () => {
    return ( 
        <div className="carousel ">
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} centerSlidePercentage={95} infiniteLoop={true} autoFocus={true} showArrows={false} centerMode={true} transitionTime={600} interval={5000} autoPlay={true}>
                <div className="carouselPack container">
                    <div className="left">
                        <span className="carouselPill">
                            <img src={badge} className="pillImg" alt="recipe badge" />
                            <p className="carouselPillTxt">Hot Recipes</p>
                        </span>
                        <div className="carouselRecipeDetails">
                            <h1>Spicy delicious chicken wings</h1>
                            <p className="recipeDetailsTxt">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            <div className="pills">
                               <span className="pillsBtn">
                                    <FaStopwatch className="pillsImg" />
                                    <p id="pillsTxt">30 Minuets</p>
                               </span>
                                <span className="pillsBtn">
                                    <PiForkKnifeFill className="pillsImg" />
                                    <p id="pillsTxt">Chicken</p>
                                </span>
                            </div>
                        </div>
                        <div className="lastChild">
                            <div className="author">
                                <img src={authorImg} alt="" className="authorImg" />
                                <div >
                                    <p className="authorName">John Smith</p>
                                    <p className="date">15 March 2022</p>
                                </div>
                            </div>
                            <div className="recipeVideo">
                                <p className="viewRecipe">view Recipe</p>
                                <RiPlayCircleLine className="playBtn"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <img src={bgRight} alt="carousel background" />
                    </div>
                    <img className="thumbsUp" src={thumbsUp} alt="" />
                </div>
                <div className="carouselPack container">
                    <div className="left">
                        <span className="carouselPill">
                            <img src={badge} className="pillImg" alt="recipe badge" />
                            <p className="carouselPillTxt">Hot Recipes</p>
                        </span>
                        <div className="carouselRecipeDetails">
                            <h1>Spicy delicious chicken wings</h1>
                            <p className="recipeDetailsTxt">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            <div className="pills">
                               <span className="pillsBtn">
                                    <FaStopwatch className="pillsImg" />
                                    <p id="pillsTxt">30 Minuets</p>
                               </span>
                                <span className="pillsBtn">
                                    <PiForkKnifeFill className="pillsImg" />
                                    <p id="pillsTxt">Chicken</p>
                                </span>
                            </div>
                        </div>
                        <div className="lastChild">
                            <div className="author">
                                <img src={authorImg} alt="" className="authorImg" />
                                <div >
                                    <p className="authorName">John Smith</p>
                                    <p className="date">15 March 2022</p>
                                </div>
                            </div>
                            <div className="recipeVideo">
                                <p className="viewRecipe">view Recipe</p>
                                <RiPlayCircleLine className="playBtn"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <img src={bgRight} alt="carousel background" />
                    </div>
                    <img className="thumbsUp" src={thumbsUp} alt="" />
                </div>
                <div className="carouselPack container">
                    <div className="left">
                        <span className="carouselPill">
                            <img src={badge} className="pillImg" alt="recipe badge" />
                            <p className="carouselPillTxt">Hot Recipes</p>
                        </span>
                        <div className="carouselRecipeDetails">
                            <h1>Spicy delicious chicken wings</h1>
                            <p className="recipeDetailsTxt">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            <div className="pills">
                               <span className="pillsBtn">
                                    <FaStopwatch className="pillsImg" />
                                    <p id="pillsTxt">30 Minuets</p>
                               </span>
                                <span className="pillsBtn">
                                    <PiForkKnifeFill className="pillsImg" />
                                    <p id="pillsTxt">Chicken</p>
                                </span>
                            </div>
                        </div>
                        <div className="lastChild">
                            <div className="author">
                                <img src={authorImg} alt="" className="authorImg" />
                                <div >
                                    <p className="authorName">John Smith</p>
                                    <p className="date">15 March 2022</p>
                                </div>
                            </div>
                            <div className="recipeVideo">
                                <p className="viewRecipe">view Recipe</p>
                                <RiPlayCircleLine className="playBtn"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <img src={bgRight} alt="carousel background" />
                    </div>
                    <img className="thumbsUp" src={thumbsUp} alt="" />
                </div>
            </Carousel>
        </div>
    );
}
 
export default CarouselComponent;
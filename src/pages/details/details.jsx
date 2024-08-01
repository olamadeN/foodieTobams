import './details.css'
import Navbar from "../../components/navbar/navbar";
import authorImg from '../../image/carousel/writer.png';
import videoImg from '../../image/detailsPage/headerVideo.png';

import orImg1 from '../../image/detailsPage/or1.png';
import orImg2 from '../../image/detailsPage/or2.png';
import orImg3 from '../../image/detailsPage/or3.png';
import greencard from '../../image/detailsPage/greencard.png';

import day1 from "../../image/dayRecipe/day1.png";
import day2 from "../../image/dayRecipe/day2.png";
import day3 from "../../image/dayRecipe/day3.png";
import day4 from "../../image/dayRecipe/day4.png";

import { FaStopwatch } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoPrintOutline } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import { useState } from 'react';

import Directions from '../../components/Directions/direction';
import Newsletter from '../../components/newsletter/newsletter';
import RecipeCard from '../../components/recipe/card';
import Footer from '../../components/footer/footer';
const RecipeDetailsPage = () => {
    /* FUNCTION FOR CHECKBOX */
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        checked ?setChecked(false): setChecked(true);
    };

    const dayRecipes = [
        {
            id:1,
            img:day1,
            title:"Mixed Tropical Fruit Salad with Superfood Boosts ",
            time: "30 Minutes",
            type:"Healthy"
        },
        {
            id:2,
            img:day2,
            title:"Big and Juicy Wagyu Beef Cheeseburger",
            time: "30 Minutes",
            type:"Western"
        },
        {
            id:3,
            img:day3,
            title:"Healthy Japanese Fried Rice with Asparagus",
            time: "30 Minutes",
            type:"Healthy"
        },
        {
            id:4,
            img:day4,
            title:"Cauliflower Walnut Vegetarian Taco Meat",
            time: "30 Minutes",
            type:"Eastern"
        }
    ]
    return ( 
        <div>
            <Navbar />
            <br /><br />
            <header className="container">
                <div className="detailsGrid">
                    <div className="detailsGridLeft">
                        <h2 className="recipeDetailsH2">Health Japanese Fried Rice</h2>
                        <div className="dfoodDetails">
                            <div className="author separator">
                                <img src={authorImg} alt="" className="authorImg" />
                                <div >
                                    <p className="authorName">John Smith</p>
                                    <p className="date">15 March 2022</p>
                                </div>                                
                            </div>
                            <div className="author separator">
                                <FaStopwatch size={30} className="authorIcon" />
                                <div >
                                    <p className="authorName">John Smith</p>
                                    <p className="date">15 March 2022</p>
                                </div>
                            </div>
                            <div className="author separator">
                                <FaStopwatch size={30} className="authorIcon" />
                                <div >
                                    <p className="authorName">John Smith</p>
                                    <p className="date">15 March 2022</p>
                                </div>
                            </div>
                            <div className="author">
                                <PiForkKnifeFill size={30} className="authorIcon" />
                                <div >
                                    <p className="authorName">John Smith</p>
                                    <p className="date">15 March 2022</p>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                    <div className="detailsGridRight">
                        <div className="docCTA">
                            <div>
                                <span>
                                    <IoPrintOutline size={30}/>
                                </span>                                
                                <p>PRINT</p>
                            </div>
                           
                            <div>
                                <span>
                                    <IoShareOutline size={30}/>
                                </span>                                
                                <p>SHARE</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* HEADER VIDEO */}
                <br /><br /><br />
                <div className="detailsGrid">
                    <div className="detailsGridLeft" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="120" data-aos-duration="600">
                        <img src={videoImg} alt="" />
                    </div>
                    <div className="detailsGrid" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="120" data-aos-duration="600">
                        <div className="detailsGridLeft">
                            <div className="nutritionInfo">
                                <h3>Nutrition Information</h3>
                                <div className="nutrient">
                                    <p>Calories</p>
                                    <p><strong>219.9 kcal</strong></p>
                                </div>
                                <div className="nutrient">
                                    <p>Total Fat</p>
                                    <p><strong>10.7 g</strong></p>
                                </div>
                                <div className="nutrient">
                                    <p>Protein</p>
                                    <p><strong>7.9 g</strong></p>
                                </div>
                                <div className="nutrient">
                                    <p>Carbohydrate</p>
                                    <p><strong>22.3 g</strong></p>
                                </div>
                                <div className="nutrient">
                                    <p>Cholesterol</p>
                                    <p><strong>37.4 mg</strong></p>
                                </div>
                                <p className='jaraInfo'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </div> 
                {/*TEXT UNDER VIDEO*/}
                <br /> <br /><br />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </header>
            {/* INGREDIENT SECTION */}
            <div className="detailsGrid container section">
                <div className="detailsGridLeft">
                    <div className="ingredientSection">
                        <h4>Ingredients</h4>
                        <br /><br />
                        <h5>For main dish</h5>
                        <br />
                        <div className="checkBoxes">
                            <label style={checked? {color:'silver'}: {color:"black"}} htmlFor="">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="" id="" /> 
                                Lorem ipsum dolor sit amet 
                            </label>
                            <label style={checked? {color:'silver'}: {color:"black"}} htmlFor="">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="" id="" /> 
                                Lorem ipsum dolor sit amet 
                            </label>
                            <label style={checked? {color:'silver'}: {color:"black"}} htmlFor="">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="" id="" /> 
                                Lorem ipsum dolor sit amet 
                            </label>
                            <label style={checked? {color:'silver'}: {color:"black"}} htmlFor="">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="" id="" /> 
                                Lorem ipsum dolor sit amet 
                            </label>
                        </div>
                        <br /><br /><br />
                        <h5>For the sauce</h5>
                        <br />
                        <div className="checkBoxes" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="120" data-aos-duration="600">
                            <label style={checked? {color:'silver'}: {color:"black"}} htmlFor="check1">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="check1" id="check1" /> 
                                Lorem ipsum dolor sit amet 
                            </label>
                            <label style={checked? {color:'silver'}: {color:"black"}} htmlFor="">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="" id="" /> 
                                Lorem ipsum dolor sit amet 
                            </label>
                            <label style={checked? {color:'silver'}: {color:"black"}} htmlFor="">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="" id="" /> 
                                Lorem ipsum dolor sit amet 
                            </label>                                
                        </div>
                    </div>
                </div>
                <div className="detailsGridRight">
                    <div className="otherRecipe">
                        <h3>Other Recipe</h3>
                        <div className="otherContainer" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="120" data-aos-duration="600">                                
                            <div className="orItem">
                                <img src={orImg1}  alt="" className="orImg" />
                                <div >
                                    <p className="orName">Chicken Meatball with Creamy Chees...</p>
                                    <p className="orCook">By Andreas Paula</p>
                                </div>                     
                            </div>
                            <div className="orItem">
                                <img src={orImg2}  alt="" className="orImg" />
                                <div >
                                    <p className="orName">The Creamiest Creamy Chicken an...</p>
                                    <p className="orCook">By Andreas Paula</p>
                                </div>                     
                            </div>
                            <div className="orItem">
                                <img src={orImg3}  alt="" className="orImg" />
                                <div >
                                    <p className="orName">The Best Easy One Pot Chicken and Rice</p>
                                    <p className="orCook">By Andreas Paula</p>
                                </div>                     
                            </div>
                            <br /><br />
                            <img src={greencard} alt="" className="orGreencard" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="120" data-aos-duration="600"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIRECTIONS */}
            <div className="detailsGrid container">
                <div className="detailsGridLeft">
                    <div className="ingredientSection">
                        <h4>Directions</h4>
                        <br />
                        <div className="checkBoxes">
                            <label id='dirLabel' htmlFor="">
                                <input className='checkbox' onChange={handleChange} type="checkbox" name="" id="" style={{marginRight:40}} /> 
                                1. Lorem ipsum dolor sit amet 
                                {checked? <Directions />: null}
                            </label>
                            <label id='dirLabel' htmlFor="">
                                <input className='checkbox' style={{marginRight:40}} onChange={handleChange} type="checkbox" name="" id="" /> 
                                2. Lorem ipsum dolor sit amet 
                                {checked? <p style={{padding:48, paddingBottom: 0, fontSize:16, fontWeight:400, marginTop:-10}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>: null}
                            </label>
                            <label id='dirLabel' htmlFor="">
                                <input className='checkbox' style={{marginRight:40}} onChange={handleChange} type="checkbox" name="" id="" /> 
                                3. Lorem ipsum dolor sit amet 
                                {checked? <p style={{padding:48, paddingBottom: 0,fontSize:16, fontWeight:400, marginTop:-10}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>: null}

                            </label>                                
                        </div>    
                    </div>
                </div>
            </div>

            {/* NEWSLETTER */}
            <div className="section">
                <Newsletter />
            </div>

            {/* YOU MAY LIKE THESE RECIPES */}
            <div className="container section">
                <div style={{textAlign:'center'}}>
                    <h2>You may like these recipe too</h2>                        
                </div>
                <br /><br />
                <div className="dayCardGrid">
                    {dayRecipes.map((data => {
                        return (<RecipeCard width= '18.125rem' height='auto' font='1.125rem' bg='white' smallFont='0.875rem' data={data} />)
                    }))} 
                </div>
            </div>

            {/* FOOTER */}
            <Footer />
            
        </div>
     );
}
 
export default RecipeDetailsPage;
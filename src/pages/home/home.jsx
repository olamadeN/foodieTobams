
import CarouselComponent from "../../components/carousel/carousel";
import Navbar from "../../components/navbar/navbar";
import RecipeCard from "../../components/recipe/card";
import { FaInstagram } from "react-icons/fa";
import './home.css';
import catImg1 from "../../image/categories/breakfast.png";
import catImg2 from "../../image/categories/vegan.png";
import catImg3 from "../../image/categories/meat.png";
import catImg4 from "../../image/categories/dessert.png";
import catImg5 from "../../image/categories/lunch.png";
import catImg6 from "../../image/categories/chocolate.png";

import tasty1  from "../../image/tastyRecipes/tasty1.png";
import tasty2  from "../../image/tastyRecipes/tasty2.png";
import tasty3  from "../../image/tastyRecipes/tasty3.png";
import tasty4  from "../../image/tastyRecipes/tasty4.png";
import tasty5  from "../../image/tastyRecipes/tasty5.png";
import tasty6  from "../../image/tastyRecipes/tasty6.png";
import tasty7  from "../../image/tastyRecipes/tasty7.png";
import tasty8  from "../../image/tastyRecipes/tasty8.png";

import chef from "../../image/chef.png";

import feed1 from "../../image/feed/feed1.png"
import feed2 from "../../image/feed/feed2.png"
import feed3 from "../../image/feed/feed3.png"
import feed4 from "../../image/feed/feed4.png"

import day1 from "../../image/dayRecipe/day1.png";
import day2 from "../../image/dayRecipe/day2.png";
import day3 from "../../image/dayRecipe/day3.png";
import day4 from "../../image/dayRecipe/day4.png";
import day5 from "../../image/dayRecipe/day5.png";
import day6 from "../../image/dayRecipe/day6.png";
import day7 from "../../image/dayRecipe/day7.png";
import day8 from "../../image/dayRecipe/day8.png";
import Newsletter from "../../components/newsletter/newsletter";

const LandingPage = () => {
    const categoryData = [
        {
            id:1,
            img:catImg1,
            name: 'Breakfast',
            back: "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)"
        },
        {
            id:2,
            img:catImg2,
            name: 'Vegan',
            back:"linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)"
        },
        {
            id:3,
            img:catImg3,
            name: 'Meat',
            back:"linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)"
        },
        {
            id:4,
            img:catImg4,    
            name: 'Dessert',
            back:"linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)"

        },
        {
            id:5,
            img:catImg5,
            name: 'Lunch',
            back:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"
        },
        {
            id:6,
            img:catImg6,
            name: 'Chocolate',
            back: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"
        }
    ]
    const tastyRecipes = [
        {
            id:1,
            img:tasty1,
            title:"Big and Juicy Wagyu Beef Cheeseburger",
            time: "30 Minutes",
            type:"Snack"
        },
        {
            id:2,
            img:tasty2,
            title:"Fresh Lime Roasted Salmon with Ginger Sauce",
            time: "30 Minutes",
            type:"Fish"
        },
        {
            id:3,
            img:tasty3,
            title:"Strawberry Oatmeal Pancake with Honey Syrup",
            time: "30 Minutes",
            type:"Breakfast"
        },
        {
            id:4,
            img:tasty4,
            title:"Fresh and Healthy Mixed Mayonnaise Salad",
            time: "30 Minutes",
            type:"Healthy"
        },
        {
            id:5,
            img:tasty5,
            title:"Chicken Meatballs with Cream Cheese",
            time: "30 Minutes",
            type:"Meat"
        },
        {
            id:6,
            img:tasty6,
            title:"Fruity Pancake with Orange & Blueberry",
            time: "30 Minutes",
            type:"Sweet"
        },
        {
            id:7,
            img:tasty7,
            title:"The Best Easy One Pot Chicken and Rice",
            time: "30 Minutes",
            type:"Snack"
        },
        {
            id:8,
            img:tasty8,
            title:"The Creamiest Creamy Chicken and Bacon Pasta",
            time: "30 Minutes",
            type:"Noodles"
        },
    ]
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
        },
        {
            id:5,
            img:day5,
            title:"Rainbow Chicken Salad with Almond Honey Mustard Dressing",
            time: "30 Minutes",
            type:"Healthy"
        },
        {
            id:6,
            img:day6,
            title:"Barbeque Spicy Sandwiches with Chips ",
            time: "30 Minutes",
            type:"Snack"
        },
        {
            id:7,
            img:day7,
            title:"Firecracker Vegan Lettuce Wraps - Spicy! ",
            time: "30 Minutes",
            type:"Seafood"
        },
        {
            id:8,
            img:day8,
            title:"Chicken Ramen Soup with Mushroom ",
            time: "30 Minutes",
            type:"Japanese"
        },
    ]
    return ( 
        <div>

            <Navbar />
            <br /><br />     
            <CarouselComponent />
            {/* CATEGORY COMPONENT */}
            <div className="categories container">            
                <div className="title">
                    <h2>Categories</h2>
                    <div className="squBtn viewAll">View All Categories</div>
                </div>
                <div className="categoryItems">
                    {categoryData.map((data)=> {
                        return <div className="catItem" id={data.id} style={{background:data.back}}>
                            <img src={data.img} alt="" className="catItemImg" />
                            <p className="catName">{data.name}</p>
                        </div>
                    })}                 
                </div>
            </div>

            {/* SIMPLE AND TASTY RECIPE */}
            <div className="container section">
                <div className="tastyHeading">
                    <h2>Simple and tasty recipes</h2>
                    <p className="subtitle tastySubtitle">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className="tastyCardGrid">
                    {tastyRecipes.map((data => {
                        return (<RecipeCard width= '25rem' height='434px' font='1.5rem' bg='linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)' smallFont='14px' data={data} />)
                    }))}    
                </div>
                
            </div>

            {/* EVERYONE CAN BE A CHEF */}
            <div className="container section chef">
                <div className="chefTxt">
                    <h2>Everyone can be a chef in their own kitchen</h2>
                    <p className="subTitle">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div className="squBtn chefBtn">Learn More</div>
                </div>
                <img src={chef} alt="" className="chefImg" />
            </div>

            {/* FOODIE INSTAGRAM*/}
            <div className=" section foodieInsta">
                <br /><br />
                <div className="container">
                    <div className="instaHeading">
                        <h2>Check out @foodieland on Instagram</h2>
                        <p className="subTitle">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className="instaFeed">
                        <img src={feed1} alt="instagram feed" />
                        <img src={feed2} alt="instagram feed" />
                        <img src={feed3} alt="instagram feed" />
                        <img src={feed4} alt="instagram feed" />
                    </div>
                    <br /><br />
                    <div className="squBtn visitFeedBtn"><p className="btnInner">Visit Our Instagram</p> <FaInstagram className="btnInner" size={23}/></div>
                </div>
                
            </div>

            {/* Recipe to make your day */}
            <div className="container section">
                <div className="recipeDayheading">
                    <h2>Try this delicious recipe to make your day</h2>
                    <p className="subTitle">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className="dayCardGrid">
                    {dayRecipes.map((data => {
                        return (<RecipeCard width= '18.125rem' height='auto' font='1.125rem' bg='white' smallFont='0.875rem' data={data} />)
                    }))} 
                </div>
            </div>

            {/* NEWSLETTER */}
            <div className="section">
                <Newsletter />
            </div>
        </div>
    );
}
 
export default LandingPage;